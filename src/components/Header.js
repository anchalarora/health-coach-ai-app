import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";
import healthLogo from "../assets/images/health-logo.png";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar sx={{ height: 100 }}>
        <Container
          maxWidth="lg"
          sx={{ display: "flex", justifyContent: "space-between" }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt="Health Coach AI"
              src={healthLogo}
              sx={{ width: 56, height: 56, marginRight: 2 }}
            />
            <Typography variant="h6">Health Coach AI Agent</Typography>
          </Box>
          <Box sx={{ display: "flex", marginLeft: "auto", marginRight: 0 }}>
            {" "}
            {/* Align to right */}
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/about">
              About
            </Button>
            <Button color="inherit" component={Link} to="/contact">
              Contact
            </Button>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
