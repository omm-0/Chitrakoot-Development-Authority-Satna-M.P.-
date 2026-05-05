import PageHero from '../components/shared/PageHero';
import FestivalCard from '../components/shared/FestivalCard';
import useFadeInUp from '../hooks/useFadeInUp';
import { festivals } from '../data/festivalsData';
import './FestivalsPage.css';

export default function FestivalsPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/festival-deepavali.jpg"
        title="Festivals & Sacred Celebrations"
        subtitle="Experience the Spiritual Calendar of Chitrakoot"
      />

      <section className="section section-dark">
        <div className="container">
          <div className="festival-grid">
            {festivals.map(f => (
              <FestivalCard
                key={f.id}
                image={f.image}
                title={f.title}
                month={f.month}
                description={f.description}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
