import { useState, useEffect, useRef } from 'react';
import Button from '../ui/Button';
import './HeroSlider.css';

const SLIDES = [
  {
    image: '/images/C1.png',
    caption: 'रामघाट की पवित्र नौकाएँ — Sacred Boats on the Mandakini at Ramghat'
  },
  {
    image: '/images/C2.png',
    caption: 'मंदाकिनी प्रपात — Where the Sacred Waters Cascade'
  },
  {
    image: '/images/C3.png',
    caption: 'प्राचीन देवालय — The Ancient Temples of Chitrakoot Dham'
  }
];

const SLIDE_INTERVAL = 5000;

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

      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`slide-caption${i === currentSlide ? ' active' : ''}`}
        >
          {slide.caption}
        </div>
      ))}

      <div className="hero-content">
        <div className="hero-eyebrow">॥ जय श्री राम ॥</div>
        <h1 className="hero-title">चित्रकूट विकास प्राधिकरण</h1>
        <div className="hero-subtitle">The Hill of Many Wonders</div>
        <p className="hero-desc">
          Where Lord Rama spent his sacred exile on the banks of the Mandakini
        </p>
        <div className="hero-ctas">
          <Button variant="primary" to="/tourism">Explore Sacred Places</Button>
          <Button variant="outline" to="/contact">Plan Your Visit</Button>
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

      <div className="scroll-down">▼</div>
    </section>
  );
}
