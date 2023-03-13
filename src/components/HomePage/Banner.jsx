import React, { useState } from "react";
import Slider from "react-slick-slider";
import { Container, Row, Col } from "react-bootstrap";
import BData from "../../JsonDatas/BannerData";

import homepageBanner1 from "../../assets/homebanner1.jpg";
import homepageBanner2 from "../../assets/homebanner2.jpg";
import homepageBanner3 from "../../assets/homebanner3.jpg";







const Banner = () => {
  const [bannerdata, setBannerData] = useState(BData);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    draggable: true,
    Margin: "100px",
    autoplay: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="banner_slider">
      <Row className="m-0">
        <Col className="p-0">
          <Slider {...settings}>
            
            <div className="banner_img">
              <img src={homepageBanner1} className="img-fluid" alt="" />
            </div>
            <div className="banner_img">
              <img src={homepageBanner2} className="img-fluid" alt="" />
            </div>
            <div className="banner_img">
              <img src={homepageBanner3} className="img-fluid" alt="" />
            </div>
          


            {/* {bannerdata.map((bd, i) => (
                            <div className='banner_img' key={bd.id}> 
                                <img src={bd.thumbnailUrl} className='img-fluid' alt="" /> 
                            </div>
                        ))} */}
          </Slider>
        </Col>
      </Row>
    </div>
  );
};

export default Banner;
