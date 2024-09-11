import React from "react";
import { Container, CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ServiceList from "./components/ServiceList";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <CssBaseline />
      <Header />
      <Container maxWidth="lg">
        <ServiceList />
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
