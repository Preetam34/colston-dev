import React, { useEffect } from "react";
import Header from "components/SearchBar/Header";
import { Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Box, Grid, Typography } from "@mui/material";
import FMTypography from "components/FMTypography/FMTypography";

import { useNavigate } from "react-router-dom";
import "./BrandDetail.css";
import brandDetail from "constants/brandDetail";
import Footer from "components/Footer";
const BrandPage = () => {
  const navigate = useNavigate();
  const brandColstonDetail = brandDetail.products;

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

      <Grid sx={{ padding: "0px 50px" }}>
        {/* product box below */}
        <div
          style={{
            borderRadius: "20px",
          }}
        >
          <img
            src={brandColstonDetail.img}
            style={{ width: "100%", height: "auto" }}
            alt=""
          />
        </div>

        <Box>
          <h3
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "500",
              fontSize: "24px",
              lineHeight: "29px",
              paddingTop: "24px",
              color: "#222222",
            }}
          >
            {brandColstonDetail.name}
          </h3>
          <p
            style={{
              fontFamily: "Montserrat",
              fontStyle: "normal",
              fontWeight: "400",
              fontSize: "16px",
              color: "#222222",
            }}
          >
            {brandColstonDetail.description}
          </p>
        </Box>
      </Grid>
      <Footer />
    </>
  );
};

export default BrandPage;
