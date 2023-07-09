import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";

const Appointment = () => {
  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Appointment</h2>

      <p>Please select date and time from the menu below</p>

      <iframe
        // Link to schedule
        src="https://cal.com/richard-parks-4gvnyg/30min?slot=&date=2023-07-13"
        className="appointment"
        title="appointment"
      ></iframe>
    </div>
  );
};

export default Appointment;
