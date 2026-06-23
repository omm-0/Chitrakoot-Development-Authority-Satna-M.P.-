import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-col-brand">
            <span className="footer-brand-name">Chitrakoot Development Authority</span>
            <span className="footer-brand-hindi">चित्रकूट विकास प्राधिकरण</span>
            <p>
              A destination portal for pilgrim facilities, tourism information, development
              updates, and sacred riverfront access across Chitrakoot Dham.
            </p>
          </div>

          <div className="footer-col">
            <h4>Explore</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about/cda">About CDA</Link></li>
              <li><Link to="/tourism/ram-ghat">Tourism</Link></li>
              <li><Link to="/projects/ongoing">Projects</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Pilgrim Info</h4>
            <ul>
              <li>Mandakini Aarti: Daily 6:00 PM</li>
              <li>Parikrama: Open All Day</li>
              <li>Best Season: October – March</li>
              <li>Pin Code: 485331</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>CDA Office, Satna, MP</li>
              <li>Tourism and local development coordination</li>
              <li>Official district and state departments</li>
              <li>Emergency: <span className="emergency">112</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Chitrakoot Development Authority, Satna, Madhya Pradesh | Government of Madhya Pradesh
        </div>
      </div>
    </footer>
  );
}
