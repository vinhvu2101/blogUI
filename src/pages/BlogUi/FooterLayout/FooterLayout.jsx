import * as React from "react";
import Container from "@mui/material/Container";
import { Typography } from "@mui/material";
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

const FooterLayout = () => {
  const useStyle = makeStyles({
    topMain: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      marginBottom: "20px !important",
      paddingTop: "30px",
    },

    textFooter: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: 0,
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.6)",
    },
  });

  const classes = useStyle();
  return (
    <Container maxWidth="sm" sx={{ pl: "48px", pr: "48px", pb: "48px" }}>
      <Typography className={classes.topMain} variant="h6">
        Footer
      </Typography>
      <Typography className={classes.textFooter}>
        Somthing here to give the footer a purpose!
      </Typography>
      <Typography className={classes.textFooter}>
        Copyright &copy;&nbsp;
        <Link href="https://mui.com/" underline="always" color="inherit">
          {"Your Website"}
        </Link>
        &nbsp; 2021
      </Typography>
    </Container>
  );
};

export default FooterLayout;
