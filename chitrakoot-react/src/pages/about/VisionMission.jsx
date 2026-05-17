import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import './VisionMission.css';

const MISSIONS = [
  {
    title: 'Heritage Conservation',
    body: 'Protect and restore ancient temples, ghats, ashrams, and pilgrimage routes across the Chitrakoot sacred zone.'
  },
  {
    title: 'Tourism Infrastructure',
    body: 'Develop modern amenities including clean accommodation, sanitation facilities, signage, and accessibility for all pilgrims.'
  },
  {
    title: 'Connectivity',
    body: 'Improve road connectivity with four-lane highways up to the MP-UP border and better last-mile transport.'
  },
  {
    title: 'Encroachment Removal',
    body: 'Systematic removal of encroachments along Parikrama Path, Godavari, Sati Anusuiya, Hanuman Dhara, and Bharat Ghat.'
  },
  {
    title: 'Sustainable Development',
    body: 'Balance modernisation with ecological preservation of the Vindhya hills, Mandakini river, and sacred forests.'
  },
  {
    title: 'Community Welfare',
    body: 'Uplift local communities through employment, skill development, and participation in the tourism economy.'
  }
];

export default function VisionMission() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="Vision &amp; Mission"
        subtitle="Our Roadmap for Chitrakoot"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="vm-vision fade-in-up">
            <span className="eyebrow">Our Vision</span>
            <h2>Transforming Chitrakoot into a World-Class Spiritual Destination</h2>
            <p>
              To transform Chitrakoot into a world-class spiritual and cultural tourism
              destination while preserving its sacred heritage, natural environment, and the
              timeless legacy of the Ramayana for future generations.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <div className="section-header">
            <span className="eyebrow">Our Mission</span>
            <h2 className="section-title">Six Pillars of Development</h2>
            <p className="section-subtitle">Guided by faith, heritage and sustainable growth</p>
          </div>

          <div className="vm-grid">
            {MISSIONS.map((m, i) => (
              <div key={i} className="vm-card fade-in-up">
                <span className="vm-card-num">0{i + 1}</span>
                <h3>{m.title}</h3>
                <p>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
