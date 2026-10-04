import { Link } from 'react-router-dom';
import { SCHOOL } from '../data/school';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <h3 className="footer__title">{SCHOOL.devanagari}</h3>
          <p className="footer__subtitle">{SCHOOL.name}</p>
          <p className="footer__text">
            {SCHOOL.tagline}
          </p>
          <p className="footer__established">Established {SCHOOL.established}</p>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <p>{SCHOOL.address.line1}</p>
          <p>{SCHOOL.address.line2}</p>
          <p>PIN - {SCHOOL.address.pin}</p>
          <p>
            <a href={`tel:+91${SCHOOL.phone}`} className="footer__phone">
              +91 {SCHOOL.phone}
            </a>
          </p>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/parent-login">Parent Login</Link></li>
          </ul>
        </div>
        <div className="footer__col">
          <h4>Connect</h4>
          <a
            href={SCHOOL.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp"
          >
            Join Our WhatsApp Group
          </a>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} {SCHOOL.name}. All rights reserved.</p>
        <p className="footer__chairperson">Chairperson: {SCHOOL.chairperson}</p>
      </div>
    </footer>
  );
}
