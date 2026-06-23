import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import './HeroSlider.css';

const SLIDES = [
  {
    image: '/images/C1.png',
    caption: 'Ramghat and the sacred Mandakini riverfront'
  },
  {
    image: '/images/C2.png',
    caption: 'Spiritual landscapes shaped by faith and pilgrimage'
  },
  {
    image: '/images/C3.png',
    caption: 'Ancient shrines, ghats, and living devotional traditions'
  }
];

const SLIDE_INTERVAL = 5500;

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentSlide(idx => (idx + 1) % SLIDES.length);
    }, SLIDE_INTERVAL);
  };

  useEffect(() => {
    startTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const goToSlide = (idx) => {
    setCurrentSlide(idx);
    startTimer();
  };

  return (
    <section className="hero">
      <div className="hero-slides">
        {SLIDES.map((slide, i) => (
          <div
            key={i}
            className={`slide${i === currentSlide ? ' active' : ''}`}
            style={{ backgroundImage: `url('${slide.image}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-eyebrow">Sacred City Portal</div>
        <h1 className="hero-title">Chitrakoot Development Authority</h1>
        <div className="hero-title-hindi">चित्रकूट विकास प्राधिकरण, सतना</div>
        <div className="hero-subtitle">The Hill of Many Wonders</div>
        <p className="hero-desc">
          Riverfront development, pilgrim services, and sacred destination access presented in
          the same visual language as the live Mahakaleshwar portal.
        </p>
        <div className="hero-ctas">
          <Button variant="primary" to="/tourism">Explore Sacred Places</Button>
          <Button variant="outline" to="/gallery">View Gallery</Button>
        </div>
        <div className="hero-caption-card">
          <span className="hero-caption-label">Featured View</span>
          <p>{SLIDES[currentSlide].caption}</p>
        </div>
      </div>

      <div className="slider-dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`slider-dot${i === currentSlide ? ' active' : ''}`}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}
