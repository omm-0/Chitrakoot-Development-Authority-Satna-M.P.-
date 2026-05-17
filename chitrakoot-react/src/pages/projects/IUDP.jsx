import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import './IUDP.css';

const FOCUS_AREAS = [
  'Regulated development zones around Kamadgiri and Ramghat',
  'Green buffer zones along the Mandakini river',
  'Pedestrian-friendly pilgrimage routes',
  'Parking management for festival seasons',
  'Affordable housing for local residents',
  'Solid waste management and modern sewerage system'
];

export default function IUDP() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="IUDP"
        subtitle="Integrated Urban Development Plan for Chitrakoot"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="iudp-intro fade-in-up">
            <span className="eyebrow">Master Plan</span>
            <h2>Integrated Urban Development Plan</h2>
            <p>
              The Integrated Urban Development Plan (IUDP) for Chitrakoot aims to create a
              comprehensive framework for the sustainable growth of the Chitrakoot urban area
              within Satna District. The plan covers land use, infrastructure, transportation,
              water supply, sewerage, solid waste management, and tourism zone planning.
            </p>
            <p>
              The IUDP is being prepared in coordination with the District Administration,
              Town &amp; Country Planning Department, and the Chitrakoot Development Authority.
              It envisions Chitrakoot as a well-planned pilgrimage town with modern civic
              amenities while preserving its sacred character and natural heritage.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Key Focus Areas</span>
            <h2 className="section-title">What the IUDP Covers</h2>
          </div>

          <div className="iudp-grid">
            {FOCUS_AREAS.map((area, i) => (
              <div key={i} className="iudp-card fade-in-up">
                <span className="iudp-num">0{i + 1}</span>
                <p>{area}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
