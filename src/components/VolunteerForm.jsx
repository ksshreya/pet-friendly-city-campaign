import React from "react";

const VolunteerForm = () => {
  return (
    <section id="volunteer-section" className="volunteer-section">
      <h2>Ready to Make a Difference? Sign Up to Volunteer!</h2>
      <form className="volunteer-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" placeholder="Your Name" required />
        </div>
        <div className="form-group">
          <label htmlFor="city">City:</label>
          <input type="text" id="city" name="city" placeholder="Your City" required />
        </div>
        <div className="form-group">
          <label htmlFor="role">Preferred Role:</label>
          <select id="role" name="role">
            <option value="awareness">Awareness Campaigner</option>
            <option value="event">Event Organizer</option>
            <option value="support">Community Support</option>
            <option value="digital">Digital Outreach</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" className="button primary">Sign Up Now!</button>
      </form>
    </section>
  );
};

export default VolunteerForm;
