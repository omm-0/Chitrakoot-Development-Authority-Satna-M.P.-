import { Link } from 'react-router-dom';
import PageHero from '../components/shared/PageHero';
import useFadeInUp from '../hooks/useFadeInUp';
import { facilities } from '../data/facilitiesData';
import './FacilitiesPage.css';

export default function FacilitiesPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/facility-mpt-bungalow.jpg"
        title="Facilities & Services"
        subtitle="For the Comfort of Every Devotee"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="facility-grid full">
            {facilities.map(f => (
              <div className="facility-card fade-in-up" key={f.id}>
                <div className="facility-card-img">
                  <img src={f.image} alt={f.fullTitle} />
                </div>
                <div className="facility-card-body">
                  <h3 className="facility-card-title">{f.fullTitle}</h3>
                  <p className="facility-card-desc">{f.fullDescription}</p>
                  <Link to="/contact" className="facility-card-link">Know More →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
