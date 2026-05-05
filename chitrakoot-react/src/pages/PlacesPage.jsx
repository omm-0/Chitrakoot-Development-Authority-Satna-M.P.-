import PageHero from '../components/shared/PageHero';
import Button from '../components/ui/Button';
import useFadeInUp from '../hooks/useFadeInUp';
import { placesDetail } from '../data/placesDetailData';
import './PlacesPage.css';

export default function PlacesPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/hero-kamadgiri-temple.jpg"
        title="Sacred Places of Chitrakoot"
        subtitle="Discover the Divine Sites of the Hill of Many Wonders"
      />

      <section className="section section-cream">
        <div className="container">
          {placesDetail.map(place => (
            <div
              className={`detail-section fade-in-up${place.isReverse ? ' reverse' : ''}`}
              key={place.id}
            >
              <div className="detail-image">
                <img src={place.image} alt={place.title} />
              </div>
              <div className="detail-content">
                <h2>{place.title}</h2>
                <div className="detail-tagline">{place.tagline}</div>
                <p className="detail-desc">{place.description}</p>
                <div className="info-card">
                  {place.infoItems.map((item, i) => (
                    <div className="info-item" key={i}>
                      <span className="info-label">{item.label}</span>
                      <span className="info-value">{item.value}</span>
                    </div>
                  ))}
                </div>
                <Button variant="outline-dark" to="/contact">View on Map</Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
