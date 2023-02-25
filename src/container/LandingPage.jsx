import React from "react";
import Banner from "../components/HomePage/Banner";
import Header from "components/SearchBar/Header";
import Faucet from "../assets/homepage/Faucet.svg";
import { Row, Col } from "react-bootstrap";
import FMButton from "components/FMButton/FMButton";
import FaucetsText from "assets/homepage/FaucetText.png";
import { Grid } from "@mui/material";
import FaucetImage from "../assets/homepage/FaucetImage.png";

const LandingPage = () => {
  return (
    <>
      <Header />
      <div>
        <Banner />
      </div>

      <Grid>
        <Row style={{ margin: "80px 366px 80px 50px" }}>
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
                marginTop: "120px",
              }}
            >
              <div style={{ textAlign: "center", marginRight: "180px" }}>
                <img src={FaucetsText} alt="" />
                <FMButton
                  sx={{
                    // width: 317px;
                    // height: 79px;
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
      </Grid>
    </>
  );
};

export default LandingPage;

{
  /* <Col md={6}>
<div style={{ width: "1024px", height: "660px" }}>
  <img src={Faucet} className="image-slideshow" alt="" />
</div>
</Col>

<Col
md={5}
style={{
  marginTop: "120px",
}}
>
<div>
  <img src={FaucetsText} className="img-fluid" alt="" />
</div>

<div style={{ textAlign: "center" }}>
  <FMButton
    sx={{
      width: "317px",
      height: "79px",
      background: "#C02222",
      boxShadow:
        "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
      borderRadius: "10px",
      fontFamily: "'Montserrat'",
      textTransform: "capitalize",
      fontStyle: "normal",
      fontWeight: 700,
      fontSize: "32px",
      "&:hover": {
        background: "#AD1F1F",
      },
    }}
    displayText={"Discover"}
  />
</div>
</Col> */
}
