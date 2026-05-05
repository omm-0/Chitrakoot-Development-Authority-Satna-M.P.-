import SectionHeader from '../shared/SectionHeader';
import FestivalCard from '../shared/FestivalCard';
import Button from '../ui/Button';
import useFadeInUp from '../../hooks/useFadeInUp';
import { festivalsHomePreview } from '../../data/festivalsData';
import './FestivalsPreview.css';

export default function FestivalsPreview() {
  const ref = useFadeInUp();

  return (
    <section className="section section-dark" ref={ref}>
      <div className="container">
        <SectionHeader title="Festivals & Sacred Celebrations" />
        <div className="festival-grid">
          {festivalsHomePreview.map(f => (
            <FestivalCard
              key={f.id}
              image={f.image}
              title={f.title}
              month={f.month}
              description={f.description}
            />
          ))}
        </div>
        <div className="view-all-wrap">
          <Button variant="outline" to="/tourism">View All Festivals</Button>
        </div>
      </div>
    </section>
  );
}
