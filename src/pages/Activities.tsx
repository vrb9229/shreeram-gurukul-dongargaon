export default function Activities() {
  const activities = [
    { icon: '🎨', title: 'Art & Craft', desc: 'Drawing, painting, and creative craft work to develop fine motor skills and imagination.' },
    { icon: '🎵', title: 'Music & Rhymes', desc: 'Singing, rhythm, and movement activities that build language and confidence.' },
    { icon: '🏃', title: 'Outdoor Play', desc: 'Supervised outdoor games and free play for physical development and fun.' },
    { icon: '📖', title: 'Storytelling', desc: 'Engaging stories that spark imagination, build vocabulary, and teach values.' },
    { icon: '🎉', title: 'Festival Celebrations', desc: 'Celebrating Indian festivals to connect children with their culture and traditions.' },
    { icon: '🎭', title: 'Role Play', desc: 'Dramatic play and role-playing activities that develop social and communication skills.' },
    { icon: '🌱', title: 'Gardening', desc: 'Hands-on nature activities where children learn about plants and the environment.' },
    { icon: '🧩', title: 'Puzzles & Games', desc: 'Educational puzzles and games that develop problem-solving and logical thinking.' },
  ];

  return (
    <div className="page">
      <div className="page-header">
        <h1>Activities</h1>
        <p>Learning through play, creativity, and exploration</p>
      </div>

      <section className="content-section">
        <div className="content-section__inner">
          <h2 className="section-title">Our Activities</h2>
          <p className="section-text">
            At Shreeram Gurukul, we believe young children learn best through play and
            hands-on experiences. Our activities are designed to make learning joyful
            and meaningful.
          </p>
          <div className="activities__grid">
            {activities.map((act) => (
              <div key={act.title} className="activity-card">
                <div className="activity-card__icon">{act.icon}</div>
                <h3>{act.title}</h3>
                <p>{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
