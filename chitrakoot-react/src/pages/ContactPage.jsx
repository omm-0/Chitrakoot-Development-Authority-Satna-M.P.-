import PageHero from '../components/shared/PageHero';
import useFadeInUp from '../hooks/useFadeInUp';
import './ContactPage.css';

export default function ContactPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        compact
        title="Contact & How to Reach"
        subtitle="Plan Your Sacred Journey"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="contact-card fade-in-up">
            <h2>Chitrakoot Development Authority</h2>
            <p className="address">Satna District, Madhya Pradesh — 485331</p>
            <div className="contact-divider" />
            <div className="contact-info-list">
              <div>Tourism Office: MPSTDC Chitrakoot Tourism</div>
              <div>Administration: District Collector Office, Satna</div>
              <div>Website: satna.nic.in</div>
              <div>Emergency: <span className="emergency">112</span></div>
            </div>
          </div>

          <div className="map-wrap fade-in-up">
            <img src="/images/map-chitrakoot.jpg" alt="Map of Chitrakoot" />
            <a
              href="https://www.google.com/maps/search/Chitrakoot+Dham+Satna"
              target="_blank"
              rel="noopener noreferrer"
              className="map-cta"
            >
              View on Google Maps →
            </a>
          </div>

          <div className="visitor-tips fade-in-up">
            <h3>Visitor Tips</h3>
            <p>
              Best Time: October to March | Dress Code: Modest attire for temples |
              Food: Strictly vegetarian only | Shopping: Wood carvings, lacquered turnery
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
