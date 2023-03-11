import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
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
import { useNavigate } from "react-router-dom";
import brandProduct from "../../constants/brandProduct";
import brandColston from "../../assets/brandColston/BrandColston.png";
import Vector from "../../assets/brandColston/Vector1.png";
import "./BrandPage.css";

const BrandPage = () => {
  const navigate = useNavigate();
  const brandColstonDetail = brandProduct.brandColston;

  const onCardClick = (element) => {
    let pId = element?._id;
   navigate(`/brand-page/${pId}`);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          paddingTop: "40px",
          paddingBottom: "40px",
        }}
      >
        <FMTypography
          displayText={"The Brands Colston"}
          styleData={{
            fontWeight: "600",
            fontSize: "40px",
            textAlign: "center",
          }}
        />
      </Box>

      <Grid>
        {/* product box below */}

        <Box
          sx={{
            borderRadius: "20px",
            padding: "0px 50px 80px",
          }}
        >
          <img
            src={brandColston}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </Box>

        <Grid
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexBasis: "33.333333%",
            justifyContent: "space-evenly",
          }}
        >
          {brandColstonDetail?.map((elem) => (
            <Box onClick={() => onCardClick(elem)}>
              <Card sx={{ width: "317", borderRadius: "20px" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      borderRadius: "20px",
                      width: "430px",
                      height: "295px",
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
                        fontFamily: "Montserrat",
                        fontStyle: "normal",
                        fontWeight: "600",
                        fontSize: "16px",
                        lineHeight: "20px",
                        color: "#FFFFFF",
                        position: "absolute",
                        bottom: "0",
                        color: "#fff",
                        top: "78%",
                      }}
                    >
                      {elem?.name}
                      <Link
                        // to={`brand-page/${elem?._id}`}
                        style={{ paddingLeft: "12px" }}
                      >
                        <img src={Vector} alt="" />
                      </Link>
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

export default BrandPage;
