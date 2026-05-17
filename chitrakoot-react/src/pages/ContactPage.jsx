import { useState } from 'react';
import PageHero from '../components/shared/PageHero';
import useFadeInUp from '../hooks/useFadeInUp';
import './ContactPage.css';

export default function ContactPage() {
  const ref = useFadeInUp();
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 4500);
  };

  return (
    <div ref={ref}>
      <PageHero
        compact
        title="Contact Us"
        subtitle="Reach Out to the Chitrakoot Development Authority"
      />

      <section className="section section-cream">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-card fade-in-up">
              <h2>Chitrakoot Development Authority</h2>
              <p className="address">Satna District, Madhya Pradesh — 485331</p>
              <div className="contact-divider" />
              <div className="contact-info-list">
                <div><span className="ci-label">Tourism Office</span> MPSTDC Chitrakoot Tourism</div>
                <div><span className="ci-label">Administration</span> District Collector Office, Satna</div>
                <div><span className="ci-label">Website</span> satna.nic.in</div>
                <div><span className="ci-label">Emergency</span> <span className="emergency">112</span></div>
              </div>
            </div>

            <form className="contact-form fade-in-up" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              <p className="contact-form-sub">We will get back to you soon.</p>

              <div className="form-row">
                <label htmlFor="cf-name">Name</label>
                <input
                  id="cf-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="form-row">
                <label htmlFor="cf-email">Email</label>
                <input
                  id="cf-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="form-row">
                <label htmlFor="cf-subject">Subject</label>
                <input
                  id="cf-subject"
                  name="subject"
                  type="text"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                />
              </div>

              <div className="form-row">
                <label htmlFor="cf-message">Message</label>
                <textarea
                  id="cf-message"
                  name="message"
                  required
                  rows="5"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Write your message…"
                />
              </div>

              <button type="submit" className="contact-submit">Send Message</button>

              {submitted && (
                <p className="contact-success">
                  Thank you — your message has been received. We will respond shortly.
                </p>
              )}
            </form>
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

          <div className="reach-section">
            <h3>How to Reach Chitrakoot</h3>
            <div className="reach-cols">
              <div className="reach-col fade-in-up">
                <span className="reach-icon">✈️</span>
                <h4>By Air</h4>
                <p>Khajuraho Airport (167 km), Prayagraj Airport (111 km). Taxi/bus available from airports.</p>
              </div>
              <div className="reach-col fade-in-up">
                <span className="reach-icon">🚂</span>
                <h4>By Rail</h4>
                <p>Chitrakoot Dham Karwi (8-12 km), Manikpur Junction (30 km), Satna (78 km).</p>
              </div>
              <div className="reach-col fade-in-up">
                <span className="reach-icon">🚗</span>
                <h4>By Road</h4>
                <p>NH35 passes through Chitrakoot. From Satna: 78 km, Prayagraj: 115 km.</p>
              </div>
            </div>
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
