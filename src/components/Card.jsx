import * as React from "react";
import {
  Link,
  Typography,
  CardMedia,
  Card,
  Box,
  CardActionArea,
} from "@mui/material";

const CardComponent = () => {
  return (
    <CardActionArea>
      <Card sx={{ display: "flex" }}>
        <Box sx={{ display: "flex", flexDirection: "column", padding: "16px" }}>
          <Typography gutterBottom variant="h5" component="div">
            Featured post
          </Typography>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: "rgba(0, 0, 0, 0.6)" }}
          >
            Nov 12
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ mb: "16px", color: "rgba(0, 0, 0, 0.87)" }}
          >
            This is a wider card with supporting text below as a natural lead-in
            to additional content.
          </Typography>
          <Link underline="always" href="#">
            Continue reading...
          </Link>
        </Box>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image="https://source.unsplash.com/random"
          alt="Live from space album cover"
        />
      </Card>
    </CardActionArea>
  );
};

export default CardComponent;
