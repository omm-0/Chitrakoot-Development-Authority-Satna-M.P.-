import Button from '../ui/Button';
import './PilgrimageCta.css';

export default function PilgrimageCta() {
  return (
    <section className="pilgrimage-cta section">
      <div className="container">
        <div className="pilgrimage-cta-panel">
          <div>
            <span className="eyebrow">Pilgrim Services</span>
            <h2>Plan A Smooth Visit To Chitrakoot Dham</h2>
            <p>
              Get quick access to sacred places, stay options, and local travel information in
              a layout inspired by the official Mahakaleshwar experience.
            </p>
          </div>
          <div className="pilgrimage-cta-actions">
            <Button variant="primary" to="/tourism">Explore Destinations</Button>
            <Button variant="outline-dark" to="/contact">Contact Authority</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
