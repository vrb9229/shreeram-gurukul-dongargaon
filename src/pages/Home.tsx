import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero__overlay">
          <div className="hero__content">
            <p className="hero__tagline">श्री श्रीराम गुरुकुल, डोंगरगाव</p>
            <h1 className="hero__title">Shreeram Gurukul Dongargaon</h1>
            <p className="hero__desc">
              A place where tradition meets modern learning — shaping responsible,
              confident, and value-driven citizens of tomorrow.
            </p>
            <div className="hero__buttons">
              <Link to="/gallery" className="btn btn--primary">Explore Gallery</Link>
              <Link to="/contact" className="btn btn--outline">Contact Us</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about__inner">
          <h2 className="section-title">About Us</h2>
          <p className="section-text">
            Shreeram Gurukul Dongargaon is dedicated to providing quality education
            rooted in Indian values and culture. Our mission is to empower students
            with knowledge, character, and the skills they need to thrive in a
            rapidly changing world while staying connected to their roots.
          </p>
          <div className="about__cards">
            <div className="about__card">
              <div className="about__card-icon">📚</div>
              <h3>Quality Education</h3>
              <p>Modern curriculum delivered by dedicated and experienced teachers.</p>
            </div>
            <div className="about__card">
              <div className="about__card-icon">🏛️</div>
              <h3>Cultural Values</h3>
              <p>Deeply rooted in Indian traditions and the Gurukul way of life.</p>
            </div>
            <div className="about__card">
              <div className="about__card-icon">🌱</div>
              <h3>Holistic Growth</h3>
              <p>Nurturing mind, body, and spirit for all-round development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="chairperson">
        <div className="chairperson__inner">
          <div className="chairperson__photo">
            <div className="chairperson__avatar">
              <span>RM</span>
            </div>
          </div>
          <div className="chairperson__info">
            <p className="chairperson__label">Chairperson's Message</p>
            <h2 className="chairperson__name">Rajendra Maruti Babar</h2>
            <blockquote className="chairperson__message">
              "Education is the most powerful tool to transform society. At Shreeram
              Gurukul, we are committed to nurturing every child with care, discipline,
              and values that will guide them throughout life. Our goal is to create
              not just educated individuals, but responsible citizens who carry the
              light of knowledge and the strength of character."
            </blockquote>
            <p className="chairperson__signature">— Rajendra Maruti Babar, Chairperson</p>
          </div>
        </div>
      </section>
    </div>
  );
}
