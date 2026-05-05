import PageHero from '../components/shared/PageHero';
import SectionHeader from '../components/shared/SectionHeader';
import Button from '../components/ui/Button';
import useFadeInUp from '../hooks/useFadeInUp';
import { tourism } from '../data/tourismData';
import './TourismPage.css';

export default function TourismPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/hero-kamadgiri-temple.jpg"
        title="Tourism in Chitrakoot"
        subtitle="The Hill of Many Wonders — Land of Lord Rama’s Exile"
      />

      <section className="section section-cream">
        <div className="container">
          <SectionHeader
            eyebrow="Sacred Destinations"
            title="Places to Explore"
            subtitle="Discover the spiritual, historic and natural wonders of Chitrakoot — from Kamtanath to the forest ashrams along the Mandakini."
          />

          <div className="tourism-grid">
            {tourism.map(place => (
              <article className="tourism-card fade-in-up" key={place.id}>
                <div className="tourism-card-img">
                  <img src={place.image} alt={place.name} />
                  <span className={`tourism-category cat-${place.category.toLowerCase()}`}>
                    {place.category}
                  </span>
                </div>
                <div className="tourism-card-body">
                  <h3 className="tourism-card-title">{place.name}</h3>
                  <p className="tourism-card-desc">{place.description}</p>
                  <Button variant="outline-dark" to="/contact" className="tourism-explore">
                    Explore More
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
