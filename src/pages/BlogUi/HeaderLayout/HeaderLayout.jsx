import * as React from "react";

import { Toolbar, Button, Typography, IconButton, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeaderLayout = () => {
  return (
    <Grid container item>
      <Grid item xs={12}>
        <Toolbar
          variant="dense"
          sx={{
            borderBottom: "solid 1px rgba(0, 0, 0, 0.12)",
          }}
        >
          <Button sx={{ mr: 2, fontWeight: 600 }} variant="text">
            Subcriber
          </Button>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: "center",
            }}
          >
            Blog
          </Typography>

          <IconButton
            size="large"
            aria-label="search"
            sx={{ color: "rgba(0, 0, 0, 0.54)" }}
          >
            <SearchIcon />
          </IconButton>

          <Button variant="outlined" sx={{ fontWeight: 600 }} size="small">
            Sign up
          </Button>
        </Toolbar>
      </Grid>
    </Grid>
  );
};

export default HeaderLayout;
