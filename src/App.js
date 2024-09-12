import React from "react";
import { Container, CssBaseline, Box } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceList from "./components/ServiceList";
import { BrowserRouter as Router } from "react-router-dom";
import HealthChatBot from "./components/HealthChatbot";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <Box mt={4} mb={4}>
          <ServiceList />
        </Box>
        <HealthChatBot />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
