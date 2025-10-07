import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // import your Firestore instance

const VolunteerForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    city: "",
    role: "awareness"
  });

  const [status, setStatus] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Submitting...");
    try {
      // Add a new document to the "volunteers" collection
      await addDoc(collection(db, "volunteers"), formData);
      setStatus("Thank you for signing up! 🎉");
      setFormData({ name: "", city: "", role: "awareness" }); // Reset form
    } catch (error) {
      console.error("Error adding document: ", error);
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section id="volunteer-section" className="volunteer-section">
      <h2>Ready to Make a Difference? Sign Up to Volunteer!</h2>
      <form className="volunteer-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="Your City"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Preferred Role:</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
          >
            <option value="awareness">Awareness Campaigner</option>
            <option value="event">Event Organizer</option>
            <option value="support">Community Support</option>
            <option value="digital">Digital Outreach</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="button primary">Sign Up Now!</button>
      </form>
      {status && <p className="form-status">{status}</p>}
    </section>
  );
};

export default VolunteerForm;
