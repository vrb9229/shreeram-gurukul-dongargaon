import { useState } from 'react';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you. Reach out with any questions.</p>
      </div>
      <div className="contact__grid">
        <div className="contact__info">
          <h3>Get in Touch</h3>
          <p><strong>Address:</strong> Dongargaon, Maharashtra, India</p>
          <p><strong>Phone:</strong> +91 00000 00000</p>
          <p><strong>Email:</strong> info@shreeramgurukul.edu.in</p>
          <p><strong>Hours:</strong> Mon – Sat, 8:00 AM – 4:00 PM</p>
        </div>
        <div className="contact__form-wrapper">
          {submitted ? (
            <div className="contact__success">
              <h3>Thank you!</h3>
              <p>Your message has been received. We'll get back to you soon.</p>
              <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact__form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="you@example.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="How can we help you?"
                />
              </div>
              <button type="submit" className="btn btn--primary">Send Message</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
