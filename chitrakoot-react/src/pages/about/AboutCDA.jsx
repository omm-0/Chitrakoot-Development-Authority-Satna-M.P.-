import PageHero from '../../components/shared/PageHero';
import useFadeInUp from '../../hooks/useFadeInUp';
import './AboutCDA.css';

export default function AboutCDA() {
  const ref = useFadeInUp();

  return (
    <div ref={ref}>
      <PageHero
        backgroundImage="/images/about-temple-history.jpg"
        title="About CDA"
        subtitle="Chitrakoot Development Authority"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="cda-grid">
            <div className="cda-body fade-in-up">
              <span className="eyebrow">Government of Madhya Pradesh</span>
              <h2>Chitrakoot Development Authority</h2>
              <p>
                The Chitrakoot Development Authority (CDA) was announced by the Honourable Chief
                Minister of Madhya Pradesh, Dr. Mohan Yadav, on 7th March 2024 during the
                inauguration of the 'Experience of Spirituality at Chitrakoot Ghat' project
                under the Swadesh Darshan 2.0 Scheme. The authority was established to oversee
                the comprehensive development of the Chitrakoot region in Satna District,
                Madhya Pradesh.
              </p>
              <p>
                The CDA is mandated to plan, coordinate, and execute development projects related
                to tourism infrastructure, heritage conservation, urban planning, road
                connectivity, sanitation, and pilgrim facilities across the Chitrakoot sacred
                zone. It works in coordination with the District Administration, MPSTDC
                (Madhya Pradesh State Tourism Development Corporation), and the Ministry of
                Tourism, Government of India.
              </p>
              <p>
                Key responsibilities include the removal of encroachments along Parikrama Path,
                Godavari, Sati Anusuiya, Hanuman Dhara, and Bharat Ghat; construction of
                four-lane roads up to the MP-UP border; and the development of world-class
                pilgrim amenities to position Chitrakoot as a premier spiritual tourism
                destination.
              </p>
            </div>

            <aside className="cda-aside fade-in-up">
              <div className="cda-highlight">
                <h4>Key Facts</h4>
                <ul>
                  <li>
                    <span className="cda-label">Established</span>
                    <span className="cda-value">March 2024</span>
                  </li>
                  <li>
                    <span className="cda-label">Under</span>
                    <span className="cda-value">Government of Madhya Pradesh</span>
                  </li>
                  <li>
                    <span className="cda-label">District</span>
                    <span className="cda-value">Satna, Madhya Pradesh</span>
                  </li>
                  <li>
                    <span className="cda-label">Scheme</span>
                    <span className="cda-value">Swadesh Darshan 2.0</span>
                  </li>
                  <li>
                    <span className="cda-label">Ministry</span>
                    <span className="cda-value">Tourism, Govt. of India</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
