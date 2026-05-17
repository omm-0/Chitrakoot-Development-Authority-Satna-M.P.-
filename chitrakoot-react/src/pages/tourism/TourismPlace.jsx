import { Link, Navigate } from 'react-router-dom';
import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import { getTourismPlace, tourismPlaces } from '../../data/tourismPlacesData';
import './TourismPlace.css';

export default function TourismPlace({ placeId }) {
  const ref = useFadeInUp();
  const place = getTourismPlace(placeId);

  if (!place) return <Navigate to="/tourism" replace />;

  const others = tourismPlaces.filter(p => p.id !== placeId).slice(0, 4);

  return (
    <>
      <PageHero
        backgroundImage={place.image}
        title={place.name}
        subtitle={place.tagline}
      />

      <section className="section section-cream" ref={ref}>
        <div className="container">
          <div className="tp-grid">
            <article className="tp-main fade-in-up">
              <span className="eyebrow">Sacred Site</span>
              <h2>About {place.name}</h2>
              <p className="tp-description">{place.description}</p>

              <div className="tp-significance">
                <h3>Spiritual Significance</h3>
                <p>{place.significance}</p>
              </div>
            </article>

            <aside className="tp-aside fade-in-up">
              <div className="tp-info-card">
                <h4>Visitor Information</h4>
                <ul>
                  <li>
                    <span className="tp-info-label">Distance</span>
                    <span className="tp-info-value">{place.info.distance}</span>
                  </li>
                  <li>
                    <span className="tp-info-label">Entry</span>
                    <span className="tp-info-value">{place.info.entry}</span>
                  </li>
                  <li>
                    <span className="tp-info-label">Timings</span>
                    <span className="tp-info-value">{place.info.timings}</span>
                  </li>
                  <li>
                    <span className="tp-info-label">How to Reach</span>
                    <span className="tp-info-value">{place.info.howToReach}</span>
                  </li>
                </ul>
                <Link to="/contact" className="tp-cta">Plan Your Visit →</Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Continue Your Pilgrimage</span>
            <h2 className="section-title">Other Sacred Places to Visit</h2>
          </div>
          <div className="tp-others-grid">
            {others.map(o => (
              <Link key={o.id} to={`/tourism/${o.slug}`} className="tp-other-card">
                <div className="tp-other-img" style={{ backgroundImage: `url('${o.image}')` }} />
                <div className="tp-other-body">
                  <h4>{o.name}</h4>
                  <p>{o.tagline}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
