import React, { useState } from "react";
import "./Contact.css";

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", role: "Student", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\nName: ${form.name}\nEmail: ${form.email}\nRole: ${form.role}\nMessage: ${form.message}`);
    setForm({ name: "", email: "", role: "Student", message: "" });
  };

  return (
    <div className="contact-container">
      <div className="contact-box">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Full Name" required />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" type="email" required />
          <select name="role" value={form.role} onChange={handleChange}>
            <option>Student</option>
            <option>Teacher / Coordinator</option>
            <option>NGO</option>
            <option>Government</option>
            <option>Other</option>
          </select>
          <textarea name="message" value={form.message} onChange={handleChange} rows={5} placeholder="Message" required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
