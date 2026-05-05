import SectionHeader from '../shared/SectionHeader';
import FacilityCard from '../shared/FacilityCard';
import useFadeInUp from '../../hooks/useFadeInUp';
import { facilities } from '../../data/facilitiesData';
import './FacilitiesPreview.css';

export default function FacilitiesPreview() {
  const ref = useFadeInUp();

  return (
    <section className="section section-cream" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Facilities & Services"
          title="For the Comfort of Devotees"
        />
        <div className="facility-grid">
          {facilities.map(f => (
            <FacilityCard
              key={f.id}
              image={f.image}
              title={f.title}
              description={f.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
