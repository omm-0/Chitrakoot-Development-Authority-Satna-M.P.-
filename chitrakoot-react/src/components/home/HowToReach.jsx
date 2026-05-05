import SectionHeader from '../shared/SectionHeader';
import useFadeInUp from '../../hooks/useFadeInUp';
import './HowToReach.css';

export default function HowToReach() {
  const ref = useFadeInUp();

  return (
    <section className="section section-cream" ref={ref}>
      <div className="container">
        <SectionHeader
          eyebrow="Plan Your Pilgrimage"
          title="How to Reach Chitrakoot"
          showDivider={false}
        />
        <div className="reach-grid">
          <div className="reach-col fade-in-up">
            <span className="reach-icon">✈️</span>
            <h3>By Air</h3>
            <p>Khajuraho Airport (167 km), Prayagraj Airport (111 km). Taxi/bus available from airports.</p>
          </div>
          <div className="reach-col fade-in-up">
            <span className="reach-icon">🚂</span>
            <h3>By Rail</h3>
            <p>Chitrakoot Dham Karwi (8-12 km), Manikpur Junction (30 km), Satna (78 km). Connected to Delhi, Mumbai, Varanasi.</p>
          </div>
          <div className="reach-col fade-in-up">
            <span className="reach-icon">🚗</span>
            <h3>By Road</h3>
            <p>NH35 passes through Chitrakoot. From Satna: 78 km, Prayagraj: 115 km. State buses from Satna, Varanasi, Lucknow.</p>
          </div>
        </div>
        <div className="reach-highlight fade-in-up">
          Best Time to Visit: October to March (10-20°C pleasant weather)
        </div>
      </div>
    </section>
  );
}
