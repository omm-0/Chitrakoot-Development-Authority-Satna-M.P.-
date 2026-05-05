import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <span className="footer-brand-name">चित्रकूट विकास प्राधिकरण</span>
            <p>Chitrakoot Development Authority — The Hill of Many Wonders. Satna District, Madhya Pradesh.</p>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/tourism">Tourism</Link></li>
              <li><Link to="/tender-notice">Tender &amp; Notice</Link></li>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Important Info</h4>
            <ul>
              <li>Mandakini Aarti: Daily 6:00 PM</li>
              <li>Kamadgiri Parikrama: Open All Day</li>
              <li>Best Season: October – March</li>
              <li>Pin Code: 485331</li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li>District Collector Office, Satna, MP</li>
              <li>MPSTDC Chitrakoot Tourism</li>
              <li>satna.nic.in</li>
              <li>Emergency: <span className="emergency">112</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 Chitrakoot Development Authority, Satna, Madhya Pradesh | Developed with devotion 🙏
        </div>
      </div>
    </footer>
  );
}
