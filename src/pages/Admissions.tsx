import { useState } from 'react';
import { SCHOOL } from '../data/school';

export default function Admissions() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    classChoice: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="page">
      <div className="page-header">
        <h1>Admissions</h1>
        <p>Begin your child's learning journey with us</p>
      </div>

      <section className="content-section">
        <div className="content-section__inner">
          <div className="content-section__text">
            <h2>Admission Process</h2>
            <p>
              We welcome admissions for Nursery, Jr. KG, and Sr. KG. The process is simple:
            </p>
            <ol className="admission-steps">
              <li>Fill out the admission enquiry form below.</li>
              <li>Our team will contact you to schedule a visit to the school.</li>
              <li>Visit the school, meet our teachers, and see our facilities.</li>
              <li>Complete the admission formalities and welcome your child to Shreeram Gurukul!</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="content-section content-section--alt">
        <div className="content-section__inner">
          <div className="admissions__layout">
            <div className="admissions__info">
              <h3>Admission Enquiry</h3>
              <p>Interested in admitting your child? Fill out the form and we'll get back to you.</p>
              <div className="admissions__contact">
                <p><strong>School:</strong> {SCHOOL.name}</p>
                <p><strong>Address:</strong> {SCHOOL.address.line1}, {SCHOOL.address.line2}, PIN - {SCHOOL.address.pin}</p>
                <p><strong>Phone:</strong> <a href={`tel:+91${SCHOOL.phone}`}>+91 {SCHOOL.phone}</a></p>
              </div>
              <a
                href={SCHOOL.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--whatsapp"
              >
                Join Our WhatsApp Group
              </a>
            </div>
            <div className="admissions__form-wrapper">
              {submitted ? (
                <div className="contact__success">
                  <h3>Thank you for your enquiry!</h3>
                  <p>We have received your admission enquiry. Our team will contact you soon.</p>
                  <button className="btn btn--primary" onClick={() => setSubmitted(false)}>
                    Submit Another Enquiry
                  </button>
                </div>
              ) : (
                <form className="contact__form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="parentName">Parent / Guardian Name</label>
                    <input
                      id="parentName"
                      type="text"
                      required
                      value={form.parentName}
                      onChange={(e) => setForm({ ...form, parentName: e.target.value })}
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="childName">Child's Name</label>
                    <input
                      id="childName"
                      type="text"
                      required
                      value={form.childName}
                      onChange={(e) => setForm({ ...form, childName: e.target.value })}
                      placeholder="Your child's name"
                    />
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="childAge">Child's Age</label>
                      <input
                        id="childAge"
                        type="text"
                        required
                        value={form.childAge}
                        onChange={(e) => setForm({ ...form, childAge: e.target.value })}
                        placeholder="e.g. 3 years"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="classChoice">Class</label>
                      <select
                        id="classChoice"
                        required
                        value={form.classChoice}
                        onChange={(e) => setForm({ ...form, classChoice: e.target.value })}
                      >
                        <option value="" disabled>Select a class</option>
                        <option value="Nursery">Nursery</option>
                        <option value="Jr. KG">Jr. KG</option>
                        <option value="Sr. KG">Sr. KG</option>
                      </select>
                    </div>
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
                    <label htmlFor="message">Message (optional)</label>
                    <textarea
                      id="message"
                      rows={3}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Any questions or additional information"
                    />
                  </div>
                  <button type="submit" className="btn btn--primary">Submit Enquiry</button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
