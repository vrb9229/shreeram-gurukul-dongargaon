import { SCHOOL } from '../data/school';

export default function About() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>About Us</h1>
        <p>{SCHOOL.tagline}</p>
      </div>

      <section className="content-section">
        <div className="content-section__inner">
          <div className="content-section__text">
            <h2>Our Story</h2>
            <p>
              {SCHOOL.name} was established in {SCHOOL.established} in Dongargaon, Sangola,
              with a simple vision: to give young children a joyful and strong foundation for
              their lifelong learning journey.
            </p>
            <p>
              As a pre-primary school, we focus exclusively on the early years — Nursery,
              Jr. KG, and Sr. KG — because we believe these are the most important years in
              a child's development. Our approach combines play-based learning with cultural
              values, helping children grow into confident, curious, and kind individuals.
            </p>
          </div>
          <div className="content-section__image">
            <img src="/gallery/2.jpeg" alt="School campus" />
          </div>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="content-section__inner">
          <div className="content-section__values">
            <h2 className="section-title">Our Values</h2>
            <div className="values__grid">
              <div className="value-card">
                <h3>Joy in Learning</h3>
                <p>We make every day at school fun, engaging, and full of discovery.</p>
              </div>
              <div className="value-card">
                <h3>Respect & Kindness</h3>
                <p>Children learn to respect themselves, others, and their environment.</p>
              </div>
              <div className="value-card">
                <h3>Cultural Roots</h3>
                <p>We celebrate Indian traditions and values alongside modern learning.</p>
              </div>
              <div className="value-card">
                <h3>Safety First</h3>
                <p>A secure and caring environment where children feel protected and loved.</p>
              </div>
            </div>
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
            <p className="chairperson__label">Chairperson</p>
            <h2 className="chairperson__name">{SCHOOL.chairperson}</h2>
            <blockquote className="chairperson__message">
              "Every child deserves a joyful and caring beginning. At Shreeram Gurukul,
              we are committed to creating a nurturing environment where young minds blossom
              with curiosity, confidence, and strong values."
            </blockquote>
            <p className="chairperson__signature">— {SCHOOL.chairperson}, Chairperson</p>
          </div>
        </div>
      </section>

      <section className="whatsapp-cta">
        <div className="whatsapp-cta__inner">
          <h2>Join Our Parent Community</h2>
          <p>Stay connected with school updates and announcements.</p>
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
