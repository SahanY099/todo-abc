import React from "react";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import WbSunnyIcon from "@mui/icons-material/WbSunny";

const Header = () => {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container maxWidth="md">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h5" color="white">
            Todo
          </Typography>
          <WbSunnyIcon sx={{ color: "white" }} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
