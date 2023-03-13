import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import ColstonLogo from "../../assets/homepage/colston-logo-new.png";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <Container
        fluid
        className=""
        style={{ background: "#FCFCFC", padding: "80px 100px" }}
      >
        <Row>
          <Col md={4}>
            <div>
              <img src={ColstonLogo} />
            </div>
            <div
              className="footer-content"
              style={{ padding: "32px 0px 25px" }}
            >
              Address: 24, ring Road, Lajpat Nagar - IV,
              <br />
              Lower Ground, New Delhi, Delhi 110024
            </div>
            <div>
              <p>
                <span className="footer-title">Mobile:</span>{" "}
                <span className="footer-content">+91-7428201028</span>
              </p>
            </div>

            <div>
              <p>
                <span className="footer-title">Email:</span>{" "}
                <a href="mailto: abc@example.com">
                  <span className="footer-content">
                    info@colstonconcepts.com 
                  </span>
                </a>
              </p>
            </div>
          </Col>

          <Col md={2}>
            <a href="/">
              <div className="footer-title">About</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">About Us</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Where to Buy</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Concepts by Colston</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Press Release</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Career</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Site Map</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Blog</div>
            </a>
          </Col>

          <Col md={2}>
            <a href="/">
              <div className="footer-title">Services</div>
            </a>
            <a href="/">
              <div className="footer-content">FAQ</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Virtual Tour</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Orientation Centre</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Book an Appointment</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Catalogue</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Request for Quotation</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Customer Care</div>
            </a>{" "}
            <a href="/">
              <div className="footer-content">Warrenty and Registration</div>
            </a>
          </Col>

          <Col md={2}>
            <a href="/">
              <div className="footer-title">Products</div>
            </a>
            <a href="/">
              <div className="footer-content">Showers</div>
            </a>
            <a href="/">
              <div className="footer-content">Wellness</div>
            </a>
            <a href="/">
              <div className="footer-content">Basins</div>
            </a>
            <a href="/">
              <div className="footer-content">Faucets</div>
            </a>
            <a href="/">
              <div className="footer-content">Catalogue</div>
            </a>
            <a href="/">
              <div className="footer-content">Accessories & More</div>
            </a>
          </Col>

          <Col md={2}>
            <a href="/">
              <div className="footer-title">Legal</div>
            </a>
            <a href="/privacy-policy">
              <div className="footer-content">Privacy Policy</div>
            </a>
            <a href="/">
              <div className="footer-content">Cookies Policy</div>
            </a>
            <a href="/">
              <div className="footer-content">Terms & Conditions</div>
            </a>
            <a href="/">
              <div className="footer-content">Disclamier</div>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Footer;
