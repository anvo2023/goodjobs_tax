import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";
import AnnouncementGrid from "../components/AnnoucementGrid";
import Loading from "../components/Loading";

const Announcement = () => {
  // To connect to the Google Sheets file,
  // refer to: https://benborgers.com/posts/google-sheets-json

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  // Loading icon while getting data
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://opensheet.elk.sh/1VMPbpnL8NWuZXmXNxWrdljLIT-lCas3Y4Dc9QViYPYU/Sheet1"
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Announcement</h2>
      {/* <p>Update the data here. Then reload page to see results</p>
      <a
        href="https://docs.google.com/spreadsheets/d/1xzauyCWXrrCp2Zls8L91tUwUJJhfK9UZWYbDcMZGAOo/edit#gid=0"
        target="_blank"
        rel="noreferrer"
      >
        Link to Google Sheet
      </a> */}

      {isLoading ? <Loading /> : null}

      <AnnouncementGrid list={data} />
    </div>
  );
};

export default Announcement;
