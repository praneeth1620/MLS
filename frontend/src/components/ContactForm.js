import React, { useState } from 'react';
import '../styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    contactName: '',
    email: '',
    phone: '',
    disputeType: '',
    flexibleHours: '',
    query: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log. Hook up to backend/API later.
    console.log('Contact form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({
      fullName: '',
      contactName: '',
      email: '',
      phone: '',
      disputeType: '',
      flexibleHours: '',
      query: ''
    });
  };

  return (
    <section className="contact-form">
      <div className="contact-form-container">
        <h2 className="contact-form-title">Get in Touch</h2>
        <form className="contact-form-grid" onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="fullName">Name</label>
            <input id="fullName" name="fullName" type="text" value={formData.fullName} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="contactName">Contact Name</label>
            <input id="contactName" name="contactName" type="text" value={formData.contactName} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="phone">Phone</label>
            <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email (optional)</label>
            <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="name@example.com" />
          </div>
          <div className="form-field full">
            <label htmlFor="query">Query</label>
            <textarea id="query" name="query" rows="4" value={formData.query} onChange={handleChange} required />
          </div>
          <div className="form-field">
            <label htmlFor="disputeType">Type of Dispute</label>
            <select id="disputeType" name="disputeType" value={formData.disputeType} onChange={handleChange} required>
              <option value="">Select type</option>
              <option value="civil">Civil</option>
              <option value="criminal">Criminal</option>
              <option value="corporate">Corporate</option>
              <option value="intellectual-property">Intellectual Property</option>
              <option value="family">Family</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-field">
            <label htmlFor="flexibleHours">Flexible Hours to Contact</label>
            <input id="flexibleHours" name="flexibleHours" type="text" value={formData.flexibleHours} onChange={handleChange} placeholder="e.g., 10am - 2pm, weekdays" />
          </div>
          <div className="form-actions">
            <button type="submit" className="submit-btn">Submit</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;


