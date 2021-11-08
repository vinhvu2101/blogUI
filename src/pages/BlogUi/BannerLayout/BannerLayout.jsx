import * as React from "react";
import { Link, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CardComponent from "../../../components/Card";

const BannerLayout = () => {
  const listLink = [
    "Technology",
    "Design",
    "Culture",
    "Business",
    "Politics",
    "Opinion",
    "Science",
    "Health",
    "Style",
    "Travel",
  ];

  const useStyles = makeStyles({
    link: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
      overflowX: "auto",
      padding: "0 24px",
    },
    banner: {
      // height: "365px",
      // backgroundColor: "rgba(0, 0, 0, 0.87)",
      color: "#fff",
      padding: "48px  0 48px 48px ",
    },
    bannerBox: {
      backgroundColor: "#424242",
      height: "365px",
      borderRadius: "4px",
      marginBottom: "32px",
      backgroundImage: "url(https://source.unsplash.com/random)",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      color: "#fff",
    },
  });

  const classes = useStyles();
  const cardData = [
    {
      title: "Featured post",
      data: " Nov 12",
      description:
        "  This is a wider card with supporting text below as a natural lead-in to additional content.",
      linkContinue: "",
    },
    {
      title: "Featured post",
      data: " Nov 12",
      description:
        "  This is a wider card with supporting text below as a natural lead-in to additional content.",
      linkContinue: "",
    },
  ];

  return (
    <Grid container item>
      <Grid item xs={12} className={classes.link}>
        {listLink.map((item, index) => (
          <Link
            href="#"
            key={index}
            underline="always"
            color="inherit"
            sx={{ padding: "12px" }}
          >
            {item}
          </Link>
        ))}
      </Grid>

      <Grid container item className={classes.bannerBox}>
        <Grid xs={12} md={6} item className={classes.banner}>
          <Typography variant="h3">
            Title of a longer featured blog post
          </Typography>
          <Typography variant="h5" sx={{ mt: 2, mb: 2 }}>
            Multiple lines of text that form the lede, informing new readers
            quickly and efficiently about what's most interesting in this post's
            contents.
          </Typography>
          <Link underline="always" href="#">
            Continue reading...
          </Link>
        </Grid>
      </Grid>

      <Grid container item spacing={1}>
        {cardData?.map((item, index) => (
          <Grid key={index} item sm={12} md={6}>
            <CardComponent item={item} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default BannerLayout;
