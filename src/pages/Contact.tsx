import { useState } from 'react';
import { SCHOOL } from '../data/school';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', message: '' });
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you</p>
      </div>

      <section className="content-section">
        <div className="content-section__inner">
          <div className="contact__grid">
            <div className="contact__info">
              <h3>School Information</h3>
              <p><strong>School:</strong> {SCHOOL.name}</p>
              <p><strong>Address:</strong> {SCHOOL.address.line1}</p>
              <p>{SCHOOL.address.line2}</p>
              <p>PIN - {SCHOOL.address.pin}</p>
              <p><strong>Phone:</strong> <a href={`tel:+91${SCHOOL.phone}`}>+91 {SCHOOL.phone}</a></p>
              <p><strong>Established:</strong> {SCHOOL.established}</p>
              <p><strong>Chairperson:</strong> {SCHOOL.chairperson}</p>
              <div className="contact__whatsapp">
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
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="Your phone number"
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
      </section>
    </div>
  );
}
