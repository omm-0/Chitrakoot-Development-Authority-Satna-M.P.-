import { Link } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import { tourismPlaces } from '../../data/tourismPlacesData';
import './TourismIndex.css';

export default function TourismIndex() {
  const ref = useFadeInUp();

  return (
    <>
      <PageHero
        backgroundImage="/images/hero-kamadgiri-temple.jpg"
        title="Sacred Places of Chitrakoot"
        subtitle="Ten Sacred Destinations of Lord Rama's Exile"
      />

      <section className="section section-cream" ref={ref}>
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Tourism</span>
            <h2 className="section-title">Explore Every Sacred Site</h2>
            <p className="section-subtitle">
              Each place in Chitrakoot tells a story from the Ramayana — visit them all on your sacred pilgrimage.
            </p>
          </div>

          <div className="ti-grid">
            {tourismPlaces.map(p => (
              <Link key={p.id} to={`/tourism/${p.slug}`} className="ti-card fade-in-up">
                <div className="ti-card-img" style={{ backgroundImage: `url('${p.image}')` }} />
                <div className="ti-card-body">
                  <h3>{p.name}</h3>
                  <p className="ti-tagline">{p.tagline}</p>
                  <span className="ti-link">Explore →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
