export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__col">
          <h3 className="footer__title">श्री श्रीराम गुरुकुल</h3>
          <p className="footer__subtitle">Shreeram Gurukul Dongargaon</p>
          <p className="footer__text">
            Nurturing young minds with traditional values and modern education.
          </p>
        </div>
        <div className="footer__col">
          <h4>Contact</h4>
          <p>Dongargaon, Maharashtra, India</p>
          <p>+91 00000 00000</p>
          <p>info@shreeramgurukul.edu.in</p>
        </div>
        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul className="footer__links">
            <li><a href="/">Home</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; {new Date().getFullYear()} Shreeram Gurukul Dongargaon. All rights reserved.</p>
      </div>
    </footer>
  );
}
