import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";
import Loading from "../components/Loading";

const Appointment = () => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://opensheet.elk.sh/1xzauyCWXrrCp2Zls8L91tUwUJJhfK9UZWYbDcMZGAOo/Sheet1"
    )
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Appointment</h2>

      {isLoading ? (
        <div>
          <p>Loading the data ... Please wait</p>
          <div className="my-2">
            <Loading />
            <div className="my-2"></div>
          </div>
        </div>
      ) : null}

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
