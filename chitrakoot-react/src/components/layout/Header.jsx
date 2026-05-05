import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import './Header.css';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/places', label: 'Sacred Places' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/festivals', label: 'Festivals' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' }
];

const LOGO_FALLBACK_SVG =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50"><rect width="50" height="50" fill="#8B3500"/><text x="50%" y="55%" text-anchor="middle" fill="#D4A017" font-family="Tiro Devanagari Hindi, serif" font-size="26" dominant-baseline="middle">ॐ</text></svg>`
  );

export default function Header() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = scrollY > 50;

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  const handleLogoError = (e) => {
    if (e.currentTarget.src !== LOGO_FALLBACK_SVG) {
      e.currentTarget.src = LOGO_FALLBACK_SVG;
    }
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-wrap">
          <NavLink to="/" className="brand" end>
            <img
              src="/images/logo.png"
              alt="Chitrakoot Development Authority"
              className="brand-logo"
              onError={handleLogoError}
            />
            <div className="brand-text-block">
              <span className="brand-name">चित्रकूट विकास प्राधिकरण</span>
              <span className="brand-loc">Satna, Madhya Pradesh</span>
            </div>
          </NavLink>

          <nav>
            <ul className="nav-list">
              {NAV_LINKS.map(link => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `nav-link${isActive ? ' active' : ''}`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={closeMenu}
      />

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <button
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ×
        </button>
        <ul className="nav-list">
          {NAV_LINKS.map(link => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `nav-link mobile-nav-link${isActive ? ' active' : ''}`
                }
                onClick={closeMenu}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
