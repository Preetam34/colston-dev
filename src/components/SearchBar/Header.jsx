import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Avatar,
  Box,
  Grid,
  Typography,
  Button,
  Menu,
  MenuItem,
  styled,
  alpha,
} from "@mui/material";
import { Stack } from "@mui/system";

import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";
import "./HeaderBootstrapMenu.css";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";
import SearchBar from "components/SearchBar/SearchBar";

import { HeaderStyle } from "./HeaderStyle";
import { commonStyle } from "../../Styles/commonStyles";

import ColstonLogo from "../../assets/ColstonLogo.svg";
import WorldIcon from "../../assets/WorldIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";

import { getMenuBarList } from "Redux/Slices/HeaderMenuList/HeaderMenuListSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    dispatch(getMenuBarList());
  }, [dispatch]);

  const accountDetailData = useSelector(
    (state) => state?.menuList?.getMenuOptionsData?.categoryList
  );

  return (
    <>
      <Grid style={{ ...HeaderStyle.headerFullStyle }}>
        <Row style={{ ...HeaderStyle.topHeader }}>
          <Col style={{ display: "flex", alignItems: "center", padding: "8px 3.125rem" }}>
            <FMTypography
              displayText={"Colston World"}
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "16px",
                color: "#FFFFFF",
                marginRight: "8px",
              }}
            />
            <div>
              <img src={WorldIcon} alt="WorldIcon" />
            </div>
          </Col>

          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              padding: "8px 3.125rem",
            }}
          >
            <FMTypography
              displayText={"Dealership Query"}
              sx={{
                fontFamily: "Montserrat",
                fontWeight: "400",
                fontSize: "16px",
                color: "#FFFFFF",
                marginRight: "24px",
              }}
            />
            <div>
              <FMButton
                displayText={"Book an appointment"}
                variant={"outlined"}
                styleData={{
                  fontFamily: "Montserrat",
                  fontWeight: "400",
                  fontSize: "10px",
                  background: "#FFF",
                  color: "#000",
                  textTransform: "none",
                  boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  border: "1px solid #fff",
                  borderRadius: "20px",
                  "&:hover": {
                    background: "#fff",
                    border: "1px solid #000",
                  },
                }}
              />
            </div>
          </Col>
        </Row>

        <Row>


          <Col
            style={{
              ...commonStyle.flexDisplayStyle,
              padding: "27px 3.125rem",
            }}
          >
            <div style={{}}>
              <img
                src={ColstonLogo}
                alt="ColstonLogo"
                style={{ ...HeaderStyle.imageStyle }}
              />
            </div>
          </Col>

          <Col
            style={{
              ...commonStyle.flexDisplayStyle,
              justifyContent: "flex-end",
              marginTop: "14px",
              padding: "0px 3.125rem",
            }}
          >
            <SearchBar placeholder={"Search"} />
          </Col>


        </Row>
      </Grid>
    </>
  );
};

export default Header;
