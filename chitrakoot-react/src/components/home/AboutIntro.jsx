import { Link } from 'react-router-dom';
import useFadeInUp from '../../hooks/useFadeInUp';
import './AboutIntro.css';

export default function AboutIntro() {
  const ref = useFadeInUp();

  return (
    <section className="section section-cream" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="about-text fade-in-up">
            <span className="eyebrow">About Chitrakoot</span>
            <h2>The Sacred Land of Lord Rama's Exile</h2>
            <p>
              Chitrakoot Dham, nestled in the serene hills of the northern Vindhya Range along
              the banks of the sacred Mandakini River, is one of India's most revered pilgrimage
              centres. Located in Satna district of Madhya Pradesh, Chitrakoot — meaning 'The
              Hill of Many Wonders' — is deeply connected to the epic Ramayana.
            </p>
            <p>
              Lord Rama, Mata Sita, and Lakshman spent eleven and a half years of their
              fourteen-year exile in these divine forests. The Hindu trinity — Brahma, Vishnu,
              and Mahesh — are said to have taken incarnation here.
            </p>
            <Link to="/about" className="know-more">Know More →</Link>
          </div>
          <div className="about-image-wrap fade-in-up">
            <img src="/images/about-temple-history.jpg" alt="Ancient Temples of Chitrakoot" />
          </div>
        </div>
      </div>
    </section>
  );
}
