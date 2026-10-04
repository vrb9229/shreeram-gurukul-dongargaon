import { SCHOOL } from '../data/school';

export default function Academics() {
  return (
    <div className="page">
      <div className="page-header">
        <h1>Academics</h1>
        <p>Our pre-primary curriculum for young learners</p>
      </div>

      <section className="content-section">
        <div className="content-section__inner">
          <div className="content-section__text">
            <h2>Our Approach</h2>
            <p>
              At {SCHOOL.name}, our curriculum is designed specifically for pre-primary
              children. We focus on learning through play, exploration, and creative
              activities that develop language, motor skills, social awareness, and a love
              for learning.
            </p>
            <p>
              Each class is tailored to the age and developmental stage of the child,
              ensuring they progress confidently from one level to the next.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="content-section__inner">
          <h2 className="section-title">Our Classes</h2>
          <div className="classes__grid">
            {SCHOOL.classes.map((cls) => (
              <div key={cls.name} className="class-card class-card--detailed">
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

      <section className="content-section">
        <div className="content-section__inner">
          <h2 className="section-title">What Children Learn</h2>
          <div className="learning-areas">
            <div className="learning-area">
              <div className="learning-area__icon">🔤</div>
              <h3>Language & Communication</h3>
              <p>Stories, rhymes, conversations, and early reading and writing skills.</p>
            </div>
            <div className="learning-area">
              <div className="learning-area__icon">🔢</div>
              <h3>Numbers & Logic</h3>
              <p>Counting, shapes, patterns, and problem-solving through playful activities.</p>
            </div>
            <div className="learning-area">
              <div className="learning-area__icon">🎨</div>
              <h3>Creative Arts</h3>
              <p>Drawing, painting, music, dance, and craft to express creativity.</p>
            </div>
            <div className="learning-area">
              <div className="learning-area__icon">🏃</div>
              <h3>Physical Development</h3>
              <p>Outdoor play, games, and activities that build strength and coordination.</p>
            </div>
            <div className="learning-area">
              <div className="learning-area__icon">🤝</div>
              <h3>Social Skills</h3>
              <p>Sharing, taking turns, teamwork, and building friendships.</p>
            </div>
            <div className="learning-area">
              <div className="learning-area__icon">📿</div>
              <h3>Values & Culture</h3>
              <p>Festivals, stories, and traditions that build character and cultural identity.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
