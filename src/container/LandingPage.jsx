import React from "react";
import Banner from "../components/HomePage/Banner";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";
import FMButton from "components/FMButton/FMButton";
import FaucetsText from "assets/homepage/FaucetText.png";
import { Grid } from "@mui/material";
import FaucetImage from "../assets/homepage/FaucetImage.png";
import Wellness from "../assets/homepage/Wellness.png";
import WellnessImage from "../assets/homepage/WellnessImage.png";
import ShowersImage from "../assets/homepage/ShowersImage.png";
import ShowersText from "../assets/homepage/ShowersText.png";
import BasinsText from "../assets/homepage/BasinsText.png";
import BasinsImage from "../assets/homepage/BasinsImage.png";

import CategorySlider from "../components/HomePage/CategorySlider";
import DisplayBanner from "../assets/homepage/DisplayBanner.jpg";

import DesignerBathtubes from "assets/homepage/DesignerBathtubes.png";

import FaucetsCat from "assets/homepage/FaucetsCat.png";
import ShowersCat from "assets/homepage/ShowersCat.png";

import SaunaCat from "assets/homepage/SaunaCat.png";

import WaterClosets from "assets/homepage/WaterClosets.png";

import BasinSanitarywares from "assets/homepage/BasinSanitarywares.png";

import Footer from "components/Footer";

import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

  const onCatClick = (FaucetsText) => {
    navigate(`/product-page/${FaucetsText}`);
  };
  return (
    <>
      <Header />
      <div>
        <Banner />
      </div>

      {/* <Grid style={{ display: "flex", justifyContent: "center" }}>
        <Row
          style={{ margin: "80px 366px 80px 50px", justifyContent: "center" }}
        >
          <div style={{ position: "relative" }}>
            {" "}
            <Col md={6}>
              <div>
                <img src={FaucetImage} alt="" />
              </div>
            </Col>
            <Col
              md={6}
              style={{
                position: "absolute",
                top: 0,
                right: 0,
                marginTop: "7.5rem",
                animation: "2s slidein-right",
                animationDelay: "5s",
                transition: " all 0.5s ease-in-out",
                animationIterationCount: 1,
                animationFillMode: "both",
              }}
            >
              <div style={{ marginLeft: "14.1rem" }}>
                <img src={FaucetsText} alt="" />
                <FMButton
                  sx={{
                    // width: 317px;
                    // height: 79px;
                    marginLeft: "8rem",
                    padding: "12px 87px",
                    background: "#C02222",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    borderRadius: "10px",
                    fontFamily: "'Montserrat'",
                    textTransform: "capitalize",
                    fontStyle: "normal",
                    fontWeight: 500,
                    fontSize: "32px",
                    "&:hover": {
                      background: "#AD1F1F",
                    },
                  }}
                  displayText={"Discover"}
                />
              </div>
            </Col>
          </div>
        </Row>
      </Grid> */}

      <section style={{ marginTop: "80px" }}>
        <div class="container reveal" onClick={() => onCatClick("Faucets")}>
          <Row class="text-container">
            <Col class="text-box">
              <img src={FaucetImage} alt="" />
            </Col>
            <Col
              class="text-box"
              style={{
                position: "absolute",
                left: "46.1rem",
                top: "7.5rem",
              }}
            >
              <div>
                <img src={FaucetsText} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "8rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <div class="container reveal" onClick={() => onCatClick("Wellness")}>
          <Row class="text-container">
            <Col
              class="text-box"
              style={{
                position: "absolute",
                top: "9.5rem",
                right: "2.7rem",
              }}
            >
              <div>
                <img src={Wellness} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "12rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
            <Col class="text-box" style={{ textAlign: "end" }}>
              <img src={WellnessImage} alt="" />
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ marginTop: "80px" }}>
        <div class="container reveal" onClick={() => onCatClick("Showers")}>
          <Row class="text-container">
            <Col class="text-box">
              <img src={ShowersImage} alt="" />
            </Col>
            <Col
              class="text-box"
              style={{
                position: "absolute",
                left: "41.6rem",
                top: "7.5rem",
              }}
            >
              <div s>
                <img src={ShowersText} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "17rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ marginTop: "80px", marginBottom: "80px" }}>
        <div class="container reveal" onClick={() => onCatClick("Basins")}>
          <Row class="text-container">
            <Col
              class="text-box"
              style={{
                position: "absolute",
                top: "9.5rem",
                right: "2.7rem",
              }}
            >
              <div>
                <img src={BasinsText} alt="" />
              </div>
              <FMButton
                sx={{
                  marginLeft: "8rem",
                  padding: "12px 87px",
                  background: "#C02222",
                  boxShadow:
                    "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                  borderRadius: "10px",
                  fontFamily: "'Montserrat'",
                  textTransform: "capitalize",
                  fontStyle: "normal",
                  fontWeight: "500",
                  fontSize: "32px",
                  "&:hover": {
                    background: "#AD1F1F",
                  },
                }}
                displayText={"Discover"}
              />
            </Col>
            <Col class="text-box" style={{ textAlign: "end" }}>
              <img src={BasinsImage} alt="" />
            </Col>
          </Row>
        </div>
      </section>

      <div>
        <Container fluid>
          <Row style={{ margin: "0", marginTop: "80px" }}>
            <Col>
              <CategorySlider />
            </Col>
          </Row>
        </Container>
      </div>

      <div>
        <Container fluid>
          <Row style={{ margin: "0", marginTop: "80px" }}>
            <Col style={{ display: "flex", justifyContent: "center" }}>
              <img
                src={DisplayBanner}
                alt=""
                style={{ width: "1340px", height: "494px" }}
              />
            </Col>
          </Row>
        </Container>
      </div>

      <div className="shopbyocca">
        <Container fluid>
          <Row style={{ margin: "0", marginTop: "80px" }}>
            <Col md={12}>
              <div className="heading_text">
                <h3>Explore Categories</h3>
              </div>
            </Col>

            <Col md={6} style={{ marginBottom: "24px" }}>
              <div className="heighautoimg">
                <div>
                  <a href="/" className="overlay">
                    <img src={DesignerBathtubes} alt="" />

                    <p>Designer Bathtubes</p>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="heighautoimg2">
                <div>
                  <a href="/" className="overlay">
                    <img src={ShowersCat} className="img-fluid" alt="" />

                    <p>Shower</p>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="heighautoimg2">
                <div>
                  <a href="/" className="overlay">
                    <img src={FaucetsCat} className="img-fluid" alt="" />
                    <p>Faucets</p>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="heighautoimg2">
                <div>
                  <a href="/" className="overlay">
                    <img src={SaunaCat} className="img-fluid" alt="" />
                    <p>Sauna</p>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={3}>
              <div className="heighautoimg2">
                <div>
                  <a href="/" className="overlay">
                    <img src={WaterClosets} className="img-fluid" alt="" />
                    <p>Water Closets</p>
                  </a>
                </div>
              </div>
            </Col>

            <Col md={6}>
              <div className="heighautoimg">
                <div>
                  <a href="/" className="overlay">
                    <img src={BasinSanitarywares} alt="" />
                    <p>Basin Sanitarywares</p>
                  </a>
                </div>
              </div>
            </Col>

            {/* <Col md={6}>
              <Row>
                <Col md={3}>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="heighautoimg second_row ">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg second_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg second_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
                <Col md={3}>
                  <div className="heighautoimg forth_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                  <div className="heighautoimg forth_row">
                    <a href="/" className="overlay">
                      <img
                        src="../../../images/one.png"
                        className="img-fluid"
                        alt=""
                      />
                      <p>Wedding</p>
                    </a>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <div className="overlay position-relative">
                <img src="../../../images/one.png" alt="" />
                <div className="twobandata">
                  <h4>The Anniversary Edit</h4>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Sequi, alias!
                  </p>
                  <a href="/">Gift Now</a>
                </div>
              </div>
            </Col> */}
          </Row>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
