import React, { useState } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../JsonDatas/JsonData";
import { Grid } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";
const SimilarProduct = () => {
  const [idata, setIdata] = useState(Data);

  const category_settings = {
    dots: false,
    infinite: true,
    speed: 500,
    draggable: true,
    centerPadding: "0px",
    centerMode: true,
    autoplay: false,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <Grid sx={{ paddingTop: "80px",paddingBottom: "80px" }}>
      <div className="bestseller samecard ">
        <Container fluid>
          <Row>
            <Col md={12}>
              <FMTypography
                displayText={"RELATED PRODUCTS"}
                styleData={{
                  textAlign: "center",
                  fontWeight: "600",
                  fontFamily: "Montserrat",
                  fontSize: "40px",
                  paddingBottom: "40px",
                }}
              />
            </Col>
            <Col md={12}>
              <Slider {...category_settings}>
                {idata.map((idata, i) => (
                  <div className="banner_img text-center" key={idata.id}>
                    <a href="/">
                      <img
                        src={idata.thumbnailUrl}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card_name">
                        <h4>Single Lever Basin Mixer</h4>
                      </div>
                    </a>
                  </div>
                ))}
              </Slider>
            </Col>
          </Row>
        </Container>
      </div>
    </Grid>
  );
};

export default SimilarProduct;
