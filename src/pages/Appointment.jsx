import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";
import Loading from "../components/Loading";

const Appointment = () => {
  const [isLoading, setIsLoading] = useState(false);

  // No real effect with data. It's just a 2 second loading icon
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Appointment</h2>

      {isLoading ? <Loading /> : null}

      <p>Please select date and time from the menu below</p>

      <iframe
        // Link to schedule
        src="https://cal.com/liem-bui-4ewtvl/30min"
        className="appointment"
        title="appointment"
      ></iframe>
    </div>
  );
};

export default Appointment;
