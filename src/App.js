import React, { useState } from "react";
import "./App.css";
const XModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { username, email, phone, dob } = formData;

    if (!username || !email || !phone || !dob) {
      alert("Please fill out all the fields.");
      return;
    }

    if (!isValidEmail(email)) {
      alert("Invalid email. Please check your email address.");
      return;
    }

    if (!isValidPhone(phone)) {
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return;
    }

    if (!isValidDate(dob)) {
      alert("Invalid date of birth. Please enter a past date.");
      return;
    }

    // Handle successful form submission (e.g., reset form data, close modal)
    setFormData({ username: "", email: "", phone: "", dob: "" });
    setIsOpen(false);
    console.log("Form submitted successfully:", formData); // For demonstration purposes
  };

  const isValidEmail = (email) => {
    // Basic email validation using regular expression
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhone = (phone) => {
    // Basic phone number validation (10 digits)
    return /^\d{10}$/.test(phone);
  };

  const isValidDate = (date) => {
    // Basic date validation (past date)
    const dobDate = new Date(date);
    return dobDate < new Date();
  };

  return (
    <div className={`app ${isOpen ? "dimmed" : ""}`} onClick={handleChange}>
      <header>User Details Modal</header>
      <center>
        <button className="submit-button" onClick={openModal}>
          Open Form
        </button>
      </center>
      {isOpen && (
        <div className="modal-content">
          <center>
            <h3>Fill Details</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="email">EmailAddress:</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="phone">Phone Number:</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <br />
              <label htmlFor="dob">Date of Birth:</label>
              <input
                type="date"
                id="dob"
                value={formData.dob}
                onChange={handleChange}
                required
              />
              <br />
              <button className="submit-button" type="submit">
                Submit
              </button>
            </form>
            <button onClick={closeModal}>Close</button>
          </center>
        </div>
      )}
    </div>
  );
};

export default XModal;
