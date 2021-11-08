import React from "react";
import FooterLayout from "./FooterLayout/FooterLayout";
import HeaderLayout from "./HeaderLayout/HeaderLayout";
import BannerLayout from "./BannerLayout/BannerLayout";
import { Grid } from "@mui/material";
import { Container } from "@mui/material";
import MainLayout from "./MainLayout/MainLayout";

const BlogLayout = () => {
  return (
    <Container maxWidth="lg">
      {/* <Grid container item> */}
      <HeaderLayout />
      {/* </Grid> */}
      {/* <Grid container item> */}
      <BannerLayout />
      {/* </Grid> */}
      <Grid container item>
        <MainLayout />
      </Grid>
      <Grid container item>
        <FooterLayout />
      </Grid>
    </Container>
  );
};

export default BlogLayout;
