import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../style/font.css";
import "../style/main.css";
import Navigation from "../components/Navbar";
import ItemGrid from "../components/ItemGrid";
import { body } from "../services/Home";
import SocialComponent from "../components/Social";

const Home = () => {
  return (
    <div className="container">
      <Navigation />

      {/* Title */}

      <div className="titleImage"></div>
      <h2 className="titleText">Good Jobs Inc</h2>

      {/* Body */}

      {/* Address, Phone */}

      <Container fluid="md">
        <Row>
          <Col s={12} m={6} lg={4}>
            <div className="address">
              <p>
                <b>Address: </b> 14214 Brookhurst St,{" "}
              </p>
              <p>Garden Grove, CA 92843</p>
              <p>
                <b>Hours:</b> Mon - Fri: 10am - 6pm{" "}
              </p>
              <p>
                <b>Phone:</b>(714) 638-3302{" "}
              </p>
              {/* <p>Email: goodjobstax@gmail.com | goodjobs92843@sbcglobal.net </p> */}
            </div>
          </Col>
          <Col s={12} m={6} lg={8}>
            <iframe
              title="Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3317.137077730354!2d-117.95681002431633!3d33.7571234732695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dd27c47aea56b5%3A0x9cee326f0525f9ba!2sGood%20Jobs%20Inc!5e0!3m2!1sen!2sus!4v1684711247581!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </Col>
        </Row>
      </Container>

      {/* Grid 1, images */}
      <ItemGrid list={body} />

      {/* social media */}
      <SocialComponent />
    </div>
  );
};

export default Home;
