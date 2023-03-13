import React, { useEffect, useState } from "react";
import {
  Box,
  Grid,
  Typography,
} from "@mui/material";
import ImageGallery from "react-image-gallery";

import "react-image-gallery/styles/css/image-gallery.css";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import moment from "moment";

import Header from "components/SearchBar/Header";
import FMTypography from "components/FMTypography/FMTypography";
import FMButton from "components/FMButton/FMButton";

import "./ProductDetail.css";

import { signUpSchema } from "validationSchema/signupSchema";
import { Col, Container, Row } from "react-bootstrap";

import products from "../../constants/product";
import productDetail from "../../constants/productDetail";

import SimilarProduct from "./SimilarProduct";
import Footer from "../../components/Footer";
import Form from "./Form";


const ProductDetail = () => {
  const dispatch = useDispatch();
  const params = useParams();
    const { id } = params;

  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    const uploadFormData = new FormData();
  };

  const navigate = useNavigate();

//  const product = productDetail.products;


  const product = products.products.find((item) => item._id == id)

  console.log("p", product.name);

  const productDetailedData = products.products;

  const apiImgs = productDetailedData?.map((elem) => ({
    original: elem?.img,
    thumbnail: elem?.img,
  }));

  const properties = {
    thumbnailPosition: "left",
    // infinite: false,
    autoPlay: false,
    showNav: false,
    useBrowserFullscreen: false,
    showPlayButton: false,
    // renderItem: this.myRenderItem.bind(this),
    originalHeight: "100px",
    items: apiImgs || [],
  };

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      slidesToSlide: 2,
      // partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      slidesToSlide: 2,
      // partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 200,
      },
      items: 1,
      slidesToSlide: 1,
      // partialVisibilityGutter: 30,
    },
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <>
      <Header />
      <Container
        fluid
        style={{
          paddingTop: "40px",
          paddingLeft: "50px",
          paddingRight: "50px",
        }}
      >
        <Grid sx={{ display: "flex" }}>
          <Row>
            <Col style={{ display: "flex" }}>
              <ImageGallery {...properties} />
            </Col>

            {/* info box right */}
            <Col
              // xs={6}
              component="form"
              className="right-info-box"
              // style={{ marginLeft: "3.125rem" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Box>
                <FMTypography
                  displayText={product.name}
                  styleData={{
                    fontSize: "40px",
                    fontWeight: "600",
                    paddingBottom: "24px",
                    fontFamily: "Montserrat",
                  }}
                />
              </Box>
              <Grid sx={{ display: "flex" }}>
                <Box
                  sx={{ display: "flex" }}
                  style={{
                    background: "#222222",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    width: "42px",
                    height: "42px",
                    marginRight: "20px",
                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      paddingTop: "50px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000000",
                    }}
                  >
                    Black
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex" }}
                  style={{
                    background: "#fff",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    width: "42px",
                    height: "42px",
                    marginRight: "20px",
                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      paddingTop: "50px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000000",
                    }}
                  >
                    White
                  </Typography>
                </Box>
                <Box
                  sx={{ display: "flex" }}
                  style={{
                    background: "#D9D9D9",
                    boxShadow:
                      "0px -1px 12px rgba(181, 180, 180, 0.12), 0px 1px 12px rgba(181, 180, 180, 0.12)",
                    width: "42px",
                    height: "42px",

                    borderRadius: "50%",
                  }}
                >
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat",
                      paddingTop: "50px",
                      fontStyle: "normal",
                      fontWeight: "400",
                      fontSize: "10px",
                      lineHeight: "12px",
                      color: "#000000",
                    }}
                  >
                    Grey
                  </Typography>
                </Box>
              </Grid>

              <Box sx={{ marginTop: "32px", maxWidth: "334px" }}>
                <FMTypography
                  displayText={"Specifications"}
                  styleData={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#000000",
                    paddingBottom: "12px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  Dimensions : L 1695 x W 1300 x H 680 mm Whirlpool Jet powered
                  by 1.5 HP Pump Air Bubble Bath (750 Watt)
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -21 Spinal Jet
                </p>

                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -(39+6) Bubble Jet
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -23 Sidelight
                </p>
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  -Ideal for 2 People
                </p>
              </Box>

              {/* cart and buy btns */}
              <Box sx={{ marginTop: "40px", display: "flex" }}>
                <FMButton
                  displayText={"Enquiry"}
                  variant="outlined"
                  styleData={{
                    borderRadius: "10px",
                    fontFamily: "'Montserrat'",
                    color: "#222",
                    border: "1px solid #E6E6E6",
                    width: "222px",
                    height: "52px",
                    fontWeight: "700",
                    fontSize: "1rem",
                    textTransform: "capitalize",
                    marginRight: "24px",
                    "&:hover": {
                      border: "1px solid #222",
                      backgroundColor: "white",
                    },
   
                  }}
                  onClick={(handleOpen)}
                />

                <FMButton
                  displayText={"Amazon"}
                  variant={"contained"}
                  styleData={{
                    background: "#C02222",
                    borderRadius: "10px",
                    fontWeight: "700",
                    fontSize: "1rem",
                    fontFamily: "Montserrat",
                    textTransform: "capitalise",
                    color: "#FFFFFF",
                    width: "228px",
                    height: "52px",
                    "&:hover": {
                      background: "#AD1F1F",
                    },
                  }}
                  onClick={handleSubmit(onSubmit)}
                  // onClick={tempSub}
                />
                <input type={"submit"} hidden />
              </Box>

              {/* prod desc */}
              <Box sx={{ paddingTop: "50px" }}>
                <FMTypography
                  displayText={"Product Description"}
                  styleData={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "500",
                    fontSize: "18px",
                    color: "#000000",
                    paddingBottom: "12px",
                  }}
                />
                <p
                  style={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "140%",
                    color: "#717171",
                  }}
                >
                  {product?.description}
                </p>
              </Box>

              {/* reviews scrolls */}

              {/* right box end below */}
            </Col>
          </Row>
        </Grid>
      </Container>

      {/* moere suggestions */}
      <SimilarProduct />

      <Form open={open} handleClose={handleClose} setOpen={setOpen} />

      <Footer />
    </>
  );
};

export default ProductDetail;
