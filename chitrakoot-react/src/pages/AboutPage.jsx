import PageHero from '../components/shared/PageHero';
import SectionHeader from '../components/shared/SectionHeader';
import useFadeInUp from '../hooks/useFadeInUp';
import { significance } from '../data/significanceData';
import './AboutPage.css';

export default function AboutPage() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="About Chitrakoot Dham"
        subtitle="The Sacred Land Where Ramayana Comes Alive"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="about-page-grid">
            <div className="about-image-wrap fade-in-up">
              <img src="/images/about-ramayana-scene.jpg" alt="Ramayana Scene" />
            </div>
            <div className="fade-in-up">
              <h2>History &amp; Mythology</h2>
              <p>
                Chitrakoot falls in the northern Vindhya Range, spread across Uttar Pradesh and
                Madhya Pradesh. The MP side comes under Satna district. The name 'Chitrakoot'
                comes from Sanskrit — 'Chitra' (Ashoka tree) + 'Koot' (peak), as the region was
                once abundant with Ashoka trees.
              </p>
              <p>
                It is believed that Lord Rama, Sita and Lakshman spent eleven and a half years
                of their fourteen-year exile in these divine forests. This is where the historic
                Bharat Milap happened — Bharata came from Ayodhya to persuade Rama to return to
                rule the kingdom. When Lord Rama gently refused, Bharata took his wooden sandals
                (Khadau) to place on the throne and rule in Rama's name.
              </p>
              <p>
                Lord Rama performed the last rites (Shraddh) of his father Dasharatha here.
                Goswami Tulsidas composed major portions of Ramcharitmanas sitting at Ramghat.
                Ancient sages — Maharishi Atri, Sati Anusuya, Agastya — performed intense
                tapasya here. The Mandakini River itself was brought down by Sati Anusuya's
                severe penance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-warm">
        <div className="container">
          <SectionHeader
            eyebrow="Spiritual Heritage"
            title="Divine Significance"
            showDivider={false}
          />
          <div className="significance-grid">
            {significance.map((text, i) => (
              <div className="significance-card fade-in-up" key={i}>
                {text}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
