import React, { useState } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import Data from "../../JsonDatas/JsonData";
import { useNavigate } from "react-router-dom";

const CategorySlider = () => {
  const [idata, setIdata] = useState(Data);
  const navigate = useNavigate();

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
  
  const onCardClick = (element) => {
    let pId = element?._id;
    navigate(`/product-detail/${pId}`);
  };

  return (
    <div className="bestseller samecard ">
      <Container fluid>
        <Row>
          <Col md={12}>
            <div className="heading_text">
              <h3>New Arrivals</h3>
            </div>
          </Col>
          <Col md={12}>
            <Slider {...category_settings}>
              {idata.map((idata, i) => (
                <div
                  className="banner_img text-center"
                  key={idata.id}
                  onClick={() => onCardClick(idata)}
                  style={{cursor:"pointer"}}
                >
                  <img src={idata.thumbnailUrl} className="img-fluid" alt="" />
                  <div className="card_name">
                    <h4>{idata.title}</h4>
                  </div>
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CategorySlider;
