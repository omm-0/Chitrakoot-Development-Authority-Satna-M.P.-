import { useState, useEffect, useRef } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import useScrollPosition from '../../hooks/useScrollPosition';
import './Header.css';

const ABOUT_LINKS = [
  { to: '/about/cda', label: 'About CDA' },
  { to: '/about/chitrakoot', label: 'About Chitrakoot' },
  { to: '/about/vision-mission', label: 'Vision & Mission' },
  { to: '/about/staff', label: 'CDA Staff' },
  { to: '/about/board', label: 'CDA Board' }
];

const PROJECT_LINKS = [
  { to: '/projects/ongoing', label: 'Ongoing Projects' },
  { to: '/projects/upcoming', label: 'Upcoming Projects' },
  { to: '/projects/iudp', label: 'IUDP' }
];

const TOURISM_LINKS = [
  { to: '/tourism/kamtanath-kamadgiri', label: 'Kamtanath / Kamadgiri' },
  { to: '/tourism/bharat-ghat', label: 'Bharat Ghat' },
  { to: '/tourism/hanuman-dhara', label: 'Hanuman Dhara' },
  { to: '/tourism/sati-anusuya', label: 'Sati Anusuya' },
  { to: '/tourism/gupt-godavari', label: 'Gupt Godavari' },
  { to: '/tourism/spatik-shila', label: 'Spatik Shila' },
  { to: '/tourism/arogya-dham', label: 'Arogya Dham' },
  { to: '/tourism/pramod-van', label: 'Pramod Van' },
  { to: '/tourism/laxman-pahadi', label: 'Laxman Pahadi' },
  { to: '/tourism/ram-ghat', label: 'Ram Ghat' }
];

const LOGO_FALLBACK_SVG =
  'data:image/svg+xml;utf8,' +
  encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 60"><circle cx="30" cy="30" r="29" fill="#8B4513" stroke="#D4A017" stroke-width="2"/><path d="M30 14 L20 36 L40 36 Z" fill="#D4A017"/><rect x="18" y="36" width="24" height="10" fill="#D4A017"/></svg>`
  );

export default function Header() {
  const scrollY = useScrollPosition();
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop hover
  const [mobileOpen, setMobileOpen] = useState({}); // mobile accordion
  const scrolled = scrollY > 30;
  const location = useLocation();
  const closeTimer = useRef(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    return () => document.body.classList.remove('no-scroll');
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleLogoError = (e) => {
    if (e.currentTarget.src !== LOGO_FALLBACK_SVG) {
      e.currentTarget.src = LOGO_FALLBACK_SVG;
    }
  };

  const openMenu = (key) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenDropdown(key);
  };
  const scheduleClose = () => {
    closeTimer.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  const toggleMobile = (key) =>
    setMobileOpen(prev => ({ ...prev, [key]: !prev[key] }));

  const isAboutActive = location.pathname.startsWith('/about');
  const isProjectsActive = location.pathname.startsWith('/projects');
  const isTourismActive = location.pathname.startsWith('/tourism');

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <div className="container nav-wrap">
          <Link to="/" className="brand">
            <img
              src="/images/logo.png"
              alt="Chitrakoot Development Authority"
              className="brand-logo"
              onError={handleLogoError}
            />
            <div className="brand-text-block">
              <span className="brand-name">Chitrakoot Development Authority</span>
              <span className="brand-name-hindi">चित्रकूट विकास प्राधिकरण</span>
            </div>
          </Link>

          <nav className="primary-nav" aria-label="Primary">
            <ul className="nav-list">
              <li>
                <NavLink to="/" end className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                  Home
                </NavLink>
              </li>

              <li
                className={`has-dropdown${openDropdown === 'about' ? ' open' : ''}`}
                onMouseEnter={() => openMenu('about')}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-trigger${isAboutActive ? ' active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'about'}
                >
                  About Us <span className="caret">▾</span>
                </button>
                <ul className="dropdown">
                  {ABOUT_LINKS.map(l => (
                    <li key={l.to}>
                      <NavLink to={l.to} className={({ isActive }) => `dropdown-link${isActive ? ' active' : ''}`}>
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li
                className={`has-dropdown${openDropdown === 'projects' ? ' open' : ''}`}
                onMouseEnter={() => openMenu('projects')}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-trigger${isProjectsActive ? ' active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'projects'}
                >
                  Projects <span className="caret">▾</span>
                </button>
                <ul className="dropdown">
                  {PROJECT_LINKS.map(l => (
                    <li key={l.to}>
                      <NavLink to={l.to} className={({ isActive }) => `dropdown-link${isActive ? ' active' : ''}`}>
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li
                className={`has-dropdown mega${openDropdown === 'tourism' ? ' open' : ''}`}
                onMouseEnter={() => openMenu('tourism')}
                onMouseLeave={scheduleClose}
              >
                <button
                  type="button"
                  className={`nav-link dropdown-trigger${isTourismActive ? ' active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'tourism'}
                >
                  Tourism <span className="caret">▾</span>
                </button>
                <ul className="dropdown dropdown-mega">
                  {TOURISM_LINKS.map(l => (
                    <li key={l.to}>
                      <NavLink to={l.to} className={({ isActive }) => `dropdown-link${isActive ? ' active' : ''}`}>
                        {l.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </li>

              <li>
                <NavLink to="/contact" className={({ isActive }) => `nav-link${isActive ? ' active' : ''}`}>
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="nav-actions">
            <NavLink to="/tender-notice" className="pill-btn">
              Tender &amp; Notice
            </NavLink>
            <NavLink to="/gallery" className="pill-btn">
              Gallery
            </NavLink>
          </div>

          <button
            className="hamburger"
            aria-label="Open menu"
            onClick={() => setMenuOpen(true)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </header>

      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      <aside className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-head">
          <span className="mobile-menu-title">Menu</span>
          <button
            className="mobile-menu-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            ×
          </button>
        </div>

        <ul className="mobile-nav-list">
          <li>
            <NavLink to="/" end className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
          </li>

          <li className={`mobile-accordion${mobileOpen.about ? ' open' : ''}`}>
            <button className="mobile-accordion-trigger" onClick={() => toggleMobile('about')}>
              About Us <span className="caret">▾</span>
            </button>
            <ul className="mobile-sublist">
              {ABOUT_LINKS.map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} className="mobile-sublink" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className={`mobile-accordion${mobileOpen.projects ? ' open' : ''}`}>
            <button className="mobile-accordion-trigger" onClick={() => toggleMobile('projects')}>
              Projects <span className="caret">▾</span>
            </button>
            <ul className="mobile-sublist">
              {PROJECT_LINKS.map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} className="mobile-sublink" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li className={`mobile-accordion${mobileOpen.tourism ? ' open' : ''}`}>
            <button className="mobile-accordion-trigger" onClick={() => toggleMobile('tourism')}>
              Tourism <span className="caret">▾</span>
            </button>
            <ul className="mobile-sublist">
              {TOURISM_LINKS.map(l => (
                <li key={l.to}>
                  <NavLink to={l.to} className="mobile-sublink" onClick={() => setMenuOpen(false)}>
                    {l.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>

          <li>
            <NavLink to="/tender-notice" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Tender &amp; Notice
            </NavLink>
          </li>
          <li>
            <NavLink to="/gallery" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="mobile-nav-link" onClick={() => setMenuOpen(false)}>
              Contact Us
            </NavLink>
          </li>
        </ul>
      </aside>
    </>
  );
}
