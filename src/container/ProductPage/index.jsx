import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";

import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate,useParams } from "react-router-dom";

import WaterPool from "../../assets/ProductPage/WaterPool.png";
import Amora from "../../assets/ProductPage/Amora.png";

import Bille from "../../assets/ProductPage/Bille.png";
import Casino from "../../assets/ProductPage/Casino.png";

import products from "../../constants/product";

import "./productPage.css";

const ProductPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { name } = params;

  const productPageData = products.products;

  
  const onCardClick = (element) => {
    let id = element?._id;
    navigate(`/product-detail/${id}`);
  };


  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <FMTypography
          displayText={name}
          styleData={{
            fontWeight: "600",
            fontSize: "40px",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid sx={{ padding: "50px 50px" }}>
        {/* product box below */}
        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {productPageData?.map((elem) => (
            <Box onClick={() => onCardClick(elem)}>
              <Card sx={{ width: "317", borderRadius: "20px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: "20px",
                      height: "317px",
                      width: "317px",
                    }}
                    image={elem?.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "18px",
                        color: "#222222",
                      }}
                    >
                      {elem?.name}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Box>
          ))}
          {/* prodct box ended */}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductPage;

{
  /* <div>
<Container fluid className="p-0 m-0">
  <Row style={{ margin: "0" }}>
    <Col md={12}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
          marginBottom: "40px",
        }}
      >
        <FMTypography
          displayText={"Water Whirlphool"}
          styleData={{
            fontWeight: "600",
            fontSize: "40px",
            textAlign: "center",
          }}
        />
      </Box>
    </Col>
  </Row>

  <Row>
    <Col
      md={12}
      style={{ display: "flex", justifyContent: "space-evenly" }}
    >
      <div style={{ width: "317px", height: "317px" }}>
        <img src={WaterPool} alt="green iguana" />
        <div className="cardText">Adonis</div>
      </div>
      <div style={{ width: "317px", height: "317px" }}>
        <img src={Amora} alt="green iguana" />
        <div className="cardText">Amora</div>
      </div>
      <div style={{ width: "317px", height: "317px" }}>
        <img src={Bille} alt="green iguana" />
        <div className="cardText">Bille</div>
      </div>
      <div style={{ width: "317px", height: "317px" }}>
        <img src={Casino} alt="green iguana" />
        <div className="cardText">Casino</div>
      </div>
    </Col>
  </Row>
</Container>
</div> */
}
