import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About Us' },
    { to: '/academics', label: 'Academics' },
    { to: '/activities', label: 'Activities' },
    { to: '/admissions', label: 'Admissions' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="navbar">
      <div className="navbar__inner">
        <Link to="/" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-icon">श्री</span>
          <span className="navbar__logo-text">Shreeram Gurukul</span>
        </Link>
        <button
          className="navbar__toggle"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`navbar__bar ${open ? 'open' : ''}`}></span>
          <span className={`navbar__bar ${open ? 'open' : ''}`}></span>
          <span className={`navbar__bar ${open ? 'open' : ''}`}></span>
        </button>
        <ul className={`navbar__links ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.to}>
              <NavLink
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
          <li className="navbar__cta">
            <NavLink
              to="/parent-login"
              className="navbar__link-btn navbar__link-btn--outline"
              onClick={() => setOpen(false)}
            >
              Parent Login
            </NavLink>
          </li>
          <li className="navbar__cta">
            <NavLink
              to="/admissions"
              className="navbar__link-btn navbar__link-btn--primary"
              onClick={() => setOpen(false)}
            >
              Admission Enquiry
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}
