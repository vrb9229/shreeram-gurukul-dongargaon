import { Link } from 'react-router-dom';
import { SCHOOL } from '../data/school';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__bg" style={{ backgroundImage: `url(${SCHOOL.heroImage})` }}>
          <div className="hero__overlay">
            <div className="hero__content">
              <p className="hero__welcome">Welcome to Shreeram Gurukul</p>
              <h1 className="hero__title">English Medium Pre-Primary School</h1>
              <p className="hero__tagline">{SCHOOL.tagline}</p>
              <div className="hero__buttons">
                <Link to="/about" className="btn btn--primary">Explore Our School</Link>
                <Link to="/admissions" className="btn btn--outline">Admission Enquiry</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-preview">
        <div className="about-preview__inner">
          <h2 className="section-title">About Our School</h2>
          <p className="section-text">
            {SCHOOL.name} is a pre-primary school in Dongargaon, Sangola, dedicated to
            giving young children a joyful and nurturing start to their education. We focus
            on play-based learning, cultural values, and the all-round development of every child.
          </p>
          <div className="about-preview__cards">
            <div className="about-preview__card">
              <div className="about-preview__card-icon">📚</div>
              <h3>Play-Based Learning</h3>
              <p>Children learn best through play, exploration, and hands-on activities.</p>
            </div>
            <div className="about-preview__card">
              <div className="about-preview__card-icon">❤️</div>
              <h3>Caring Environment</h3>
              <p>A safe, warm, and welcoming space where every child feels valued.</p>
            </div>
            <div className="about-preview__card">
              <div className="about-preview__card-icon">🌱</div>
              <h3>Holistic Growth</h3>
              <p>Nurturing physical, social, emotional, and cognitive development.</p>
            </div>
          </div>
          <div className="about-preview__link">
            <Link to="/about" className="btn btn--text">Learn more about us &rarr;</Link>
          </div>
        </div>
      </section>

      <section className="classes">
        <div className="classes__inner">
          <h2 className="section-title">Our Classes</h2>
          <p className="section-text">
            We offer three pre-primary classes designed for the developmental needs of young children.
          </p>
          <div className="classes__grid">
            {SCHOOL.classes.map((cls) => (
              <div key={cls.name} className="class-card">
                <div className="class-card__header">
                  <h3>{cls.name}</h3>
                  <span className="class-card__age">{cls.age}</span>
                </div>
                <p className="class-card__desc">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="chairperson">
        <div className="chairperson__inner">
          <div className="chairperson__photo">
            <div className="chairperson__avatar">
              <span>RB</span>
            </div>
          </div>
          <div className="chairperson__info">
            <p className="chairperson__label">Chairperson's Message</p>
            <h2 className="chairperson__name">{SCHOOL.chairperson}</h2>
            <blockquote className="chairperson__message">
              "Every child deserves a joyful and caring beginning. At Shreeram Gurukul,
              we are committed to creating a nurturing environment where young minds blossom
              with curiosity, confidence, and strong values. We invite you to be part of our
              growing family."
            </blockquote>
            <p className="chairperson__signature">— {SCHOOL.chairperson}, Chairperson</p>
          </div>
        </div>
      </section>

      <section className="whatsapp-cta">
        <div className="whatsapp-cta__inner">
          <h2>Join Our Parent Community</h2>
          <p>Stay connected with school updates, events, and announcements through our WhatsApp group.</p>
          <a
            href={SCHOOL.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--whatsapp btn--large"
          >
            Join Our WhatsApp Group
          </a>
        </div>
      </section>
    </div>
  );
}
