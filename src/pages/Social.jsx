import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "../components/Navbar";
import "../style/font.css";
import "../style/main.css";
import SocialComponent from "../components/Social";

const Social = () => {
  return (
    <div className="container text-center">
      <Navigation />
      <h2 className="text-center">Social Media</h2>

      {/* social media */}
      <SocialComponent />

      {/* Participate */}
      <div className="mt-5">
        <h5>
          Submit your photos for a chance to be featured on our Instagram and
          website! Please complete form below:
        </h5>

        <iframe
          title="Social Media Submission"
          src="https://docs.google.com/forms/d/e/1FAIpQLSd-8zhMg17CHMGTNpcqu9oDk5QfUdUqCtK17OLL9YCV8flTzQ/viewform?embedded=true"
          width="100%"
          height="1100"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          onload='javascript:(function(o){o.style.height=o.contentWindow.document.body.scrollHeight+"px";}'
        >
          Loading…
        </iframe>
      </div>
    </div>
  );
};

export default Social;
