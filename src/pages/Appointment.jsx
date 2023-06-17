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

      <iframe
        // Link to schedule
        src="https://calendly.com/medbz2k5/30min"
        className="appointment"
        title="appointment"
      ></iframe>
    </div>
  );
};

export default Appointment;
