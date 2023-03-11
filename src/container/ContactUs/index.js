import React, { useState } from "react";
import { Box, Grid, InputBase } from "@mui/material";

import FMButton from "components/FMButton/FMButton";
import FMTypography from "components/FMTypography/FMTypography";

import { commonStyle } from "Styles/commonStyles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactFormSchema } from "validationSchema/contactFormSchema";
import { notify } from "components/FMToaster/FMToaster";
import Cross from "../../assets/ProductPage/Vector.png";
import { Row, Col, Container } from "react-bootstrap";
import Header from "components/SearchBar/Header";

const style = {
  bgcolor: "background.paper",
  borderRadius: "20px",
  paddingTop: "40px",
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    mode: "onChange",
  });
  const onSubmit = (data) => {
    console.log("form submit");
  };

  return (
    <>
      <Header />
      <Box sx={style}>
        <Container
          fluid
          style={{
            width: "635px",
            height: "auto",
            background: "#FFFFFF",
            boxShadow:
              "0px -1px 12px rgb(181 180 180 / 12%), 0px 1px 12px rgb(181 180 180 / 12%)",
            borderRadius: "20px",
            padding: "0px 40px 0px 40px",
          }}
        >
          <Box component="form" xs={12}>
            <Row>
              <Col
                md={12}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  padding: "35px 40px",
                }}
              >
                <FMTypography
                  displayText="Contact Us"
                  styleData={{
                    fontFamily: "Montserrat",
                    fontWeight: "600",
                    fontSize: "40px",
                    lineHeight: "49px",
                    textAlign: "center",
                    color: "#000000",
                  }}
                />
              </Col>
              <Col md={6} style={{ paddingBottom: "25px" }}>
                <InputBase
                  required
                  id="name"
                  name="name"
                  placeholder="Name"
                  sx={{
                    ...commonStyle.inputFieldContactStyle,
                    ...(errors.name && commonStyle.errorContactStyle),
                  }}
          //        {...register("name")}
                  error={errors.name ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.name?.message}
                />
              </Col>
              <Col md={6}>
                <InputBase
                  required
                  id="email"
                  name="email"
                  placeholder="Email"
                  sx={{
                    ...commonStyle.inputFieldContactStyle,
                    ...(errors.email && commonStyle.errorContactStyle),
                  }}
           //       {...register("email")}
                  error={errors.email ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.email?.message}
                />
              </Col>
              <Col md={6} style={{ paddingBottom: "25px" }}>
                <InputBase
                  required
                  id="mobileNo"
                  name="mobileNo"
                  placeholder="Mobile Number"
                  sx={{
                    ...commonStyle.inputFieldContactStyle,
                    ...(errors.mobileNo && commonStyle.errorContactStyle),
                  }}
           //       {...register("mobileNo")}
                  error={errors.mobileNo ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.mobileNo?.message}
                />
              </Col>
              <Col md={6} style={{ paddingBottom: "25px" }}>
                <InputBase
                  required
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  sx={{
                    ...commonStyle.inputFieldContactStyle,
                    ...(errors.subject && commonStyle.errorContactStyle),
                  }}
           //       {...register("subject")}
                  error={errors.subject ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.subject?.message}
                />
              </Col>
              <Col md={12} style={{ paddingBottom: "40px" }}>
                <InputBase
                  required
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  sx={{
                    ...commonStyle.inputFieldContactStyle,
                    ...(errors.description && commonStyle.errorContactStyle),
                    width: "555px",
                    height: "165px",
                    border: "1px solid #E6E6E6",
                    borderRadius: "10px",
                  }}
           //       {...register("message")}
                  error={errors.description ? true : false}
                />
                <FMTypography
                  styleData={{
                    ...commonStyle.errorContactText,
                    fontSize: "11px",
                  }}
                  displayText={errors.message?.message}
                />
              </Col>
              <Col style={{ paddingBottom: "40px" }}>
                <FMButton
                  displayText={"Submit"}
                  variant="outlined"
                  styleData={{
                    fontFamily: "Montserrat",
                    fontStyle: "normal",
                    fontWeight: "600",
                    fontSize: "16px",
                    lineHeight: "20px",
                    background: "#C02222",
                    width: "125px",
                    height: "52px",
                    borderRadius: "10px",
                    /* identical to box height */
                    color: "#FFFFFF",
                    "&:hover": {
                      border: "1px solid #222",
                      color: "black",
                      backgroundColor: "white",
                    },
                  }}
                  onClick={handleSubmit(onSubmit)}
                />
              </Col>
            </Row>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default ContactUs;
