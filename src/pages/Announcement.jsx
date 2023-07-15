import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";
import AnnouncementGrid from "../components/AnnoucementGrid";
import { body } from "../services/Announcement";

const Announcement = () => {
  // To connect to the Google Sheets file,
  // Refer to the file:
  // services --> Announcement.js

  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Announcement</h2>

      <AnnouncementGrid list={body} />
    </div>
  );
};

export default Announcement;
