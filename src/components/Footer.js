// Footer.js
import React from "react";
import { Box, Typography, Container } from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 3,
        px: 2,
        mt: "auto",
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Health Coach. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
