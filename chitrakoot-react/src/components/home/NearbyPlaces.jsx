import { useRef } from 'react';
import PlaceCard from '../shared/PlaceCard';
import useFadeInUp from '../../hooks/useFadeInUp';
import { nearbyPlaces } from '../../data/nearbyPlacesData';
import './NearbyPlaces.css';

export default function NearbyPlaces() {
  const ref = useFadeInUp();
  const trackRef = useRef(null);

  const scrollBy = (delta) => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: delta, behavior: 'smooth' });
    }
  };

  return (
    <section className="section section-warm" ref={ref}>
      <div className="container">
        <div className="nearby-header">
          <h2 className="fade-in-up">Explore Nearby Sacred Places</h2>
          <div className="scroll-controls">
            <button
              className="scroll-btn"
              aria-label="Scroll left"
              onClick={() => scrollBy(-300)}
            >
              ←
            </button>
            <button
              className="scroll-btn"
              aria-label="Scroll right"
              onClick={() => scrollBy(300)}
            >
              →
            </button>
          </div>
        </div>
        <div className="nearby-track" ref={trackRef}>
          {nearbyPlaces.map(p => (
            <PlaceCard
              key={p.id}
              image={p.image}
              title={p.title}
              description={p.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
