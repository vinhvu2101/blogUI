import { Grid, Typography, Box, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

const MainLayout = () => {
  const useStyles = makeStyles({
    typoHeader: {
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
      fontWeight: 600,
      fontSize: "1.25rem",
      lineHeight: 1.6,
      letterSpacing: "0.0075em",
      marginBottom: "0.35em",
      color: "rgba(0, 0, 0, 0.87)",
      //   borderBottom: "solid 1px rgba(0, 0, 0, 0.12) ",
      margin: "0 0 7px",
    },
    date: {
      margin: 0,
      fontWeight: 400,
      fontSize: "0.75rem",
      marginBottom: "16px",
    },
    text: {
      margin: 0,
      fontWeight: 400,
      fontSize: "1rem",
      marginBottom: "16px",
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
    },
    boxAbout: {
      fontFamily: "Roboto,Helvetica,Arial,sans-serif",
      fontWeight: 400,
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "0.00938em",
      color: "rgba(0, 0, 0, 0.87)",
      borderRadius: "4px",
      boxShadow: "none",
      padding: "16px",
      backgroundColor: "#eeeeee",
    },
    listLink: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
    },
  });
  const classes = useStyles();
  const listLink = [
    "March 2020",
    "February 2020",
    "January 2020",
    "November 1999",
    "October 1999",
    "September 1999",
    "August 1999",
    "July 1999",
    "June 1999",
    "May 1999",
    "April 1999",
  ];
  const listSocial = [
    {
      name: "GitHub",
      icon: <GitHubIcon color="primary" />,
    },
    {
      name: "Twitter",
      icon: <TwitterIcon color="primary" />,
    },
    {
      name: "Facebook",
      icon: <FacebookIcon color="primary" />,
    },
  ];
  return (
    // <Grid container item xs={12}>
    <Grid container spacing={4} sx={{ marginTop: "30px" }}>
      <Grid item xs={12} md={8}>
        <Typography className={classes.typoHeader} variant="h5">
          From the firehose
        </Typography>
        <hr />
        <Box>
          <Typography variant="h4" sx={{ marginBottom: "0.35rem" }}>
            Sample blog post
          </Typography>
          <Typography className={classes.date}>
            April 1, 2020 by{" "}
            <Link underline="always" href="#">
              Olivier
            </Link>
          </Typography>
          <Typography className={classes.text}>
            This blog post shows a few different types of content that are
            supported and styled with Material styles. Basic typography, images,
            and code are all supported. You can extend these by modifying
            Markdown.js.
          </Typography>
          <Typography className={classes.text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Sed posuere consectetur est at
            lobortis. Cras mattis consectetur purus sit amet fermentum.
          </Typography>
          <Typography className={classes.text}>
            Curabitur blandit tempus porttitor.{" "}
            <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
            leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </Typography>
          <Typography className={classes.text}>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
          <Typography className={classes.typoHeader} variant="h5">
            Heading
          </Typography>
          <Typography className={classes.text}>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
          <Typography className={classes.text}>Sub-heading</Typography>
          <Typography className={classes.text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus.
          </Typography>
          <Typography className={classes.text}>Sub-heading</Typography>
          <Typography className={classes.text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
            consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus.
          </Typography>
          <ul className={classes.text}>
            <li>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.
            </li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
          <Typography className={classes.text}>
            Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
            libero, a pharetra augue.
          </Typography>
          <ol className={classes.text}>
            <li>Vestibulum id ligula porta felis euismod semper.</li>
            <li>
              Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus.
            </li>
            <li>
              Maecenas sed diam eget risus varius blandit sit amet non magna.
            </li>
          </ol>
          <Typography className={classes.text}>
            Cras mattis consectetur purus sit amet fermentum. Sed posuere
            consectetur est at lobortis.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h4" sx={{ marginBottom: "0.35rem" }}>
            Another blog post
          </Typography>
          <Typography className={classes.date}>
            March 23, 2020 by{" "}
            <Link underline="always" href="#">
              Matt
            </Link>
          </Typography>

          <Typography className={classes.text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean eu leo quam. Pellentesque ornare sem
            lacinia quam venenatis vestibulum. Sed posuere consectetur est at
            lobortis. Cras mattis consectetur purus sit amet fermentum.
          </Typography>
          <Typography className={classes.text}>
            Curabitur blandit tempus porttitor.{" "}
            <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu
            leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
          </Typography>
          <Typography className={classes.text}>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
          <Typography className={classes.text}>
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor. Duis mollis, est non commodo luctus, nisi erat porttitor
            ligula, eget lacinia odio sem nec elit. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </Typography>
        </Box>

        <Box>
          <Typography variant="h4" sx={{ marginBottom: "0.35rem" }}>
            New feature
          </Typography>
          <Typography className={classes.date}>
            March 14, 2020 by{" "}
            <Link underline="always" href="#">
              Tom
            </Link>
          </Typography>
          <Typography className={classes.text}>
            Cum sociis natoque penatibus et magnis dis parturient montes,
            nascetur ridiculus mus. Aenean lacinia bibendum nulla sed
            consectetur. Etiam porta sem malesuada magna mollis euismod. Fusce
            dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh,
            ut fermentum massa justo sit amet risus.
          </Typography>

          <ul className={classes.text}>
            <li>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur
              et.
            </li>
            <li>Donec id elit non mi porta gravida at eget metus.</li>
            <li>Nulla vitae elit libero, a pharetra augue.</li>
          </ul>
          <Typography className={classes.text}>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>

          <Typography className={classes.text}>
            Donec ullamcorper nulla non metus auctor fringilla. Nulla vitae elit
            libero, a pharetra augue.
          </Typography>
        </Box>
      </Grid>

      <Grid item xs={12} md={4}>
        <Box className={classes.boxAbout}>
          <Typography className={classes.typoHeader} variant="h5">
            About
          </Typography>
          <Typography className={classes.text}>
            Etiam porta sem malesuada magna mollis euismod. Cras mattis
            consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla
            sed consectetur.
          </Typography>
        </Box>

        <Typography
          className={classes.typoHeader}
          sx={{ margin: "24px 0 7px !important" }}
          variant="h5"
        >
          Archives
        </Typography>

        <Box className={classes.listLink}>
          {listLink?.map((item) => (
            <Link underline="always" href="#">
              {item}
            </Link>
          ))}
        </Box>
        <Typography
          className={classes.typoHeader}
          sx={{ margin: "24px 0 7px !important" }}
          variant="h5"
        >
          Social
        </Typography>
        <Grid container item>
          {listSocial?.map((item) => (
            <>
              <Grid item xs={1} sx={{ cursor: "pointer" }}>
                {item.icon}
              </Grid>
              <Grid item xs={11}>
                {" "}
                <Link underline="always" href="#">
                  {item.name}
                </Link>
              </Grid>
            </>
          ))}
        </Grid>
      </Grid>
    </Grid>
    // </Grid>
  );
};

export default MainLayout;
