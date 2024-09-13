import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Container } from "@mui/system";
import { services } from "../mocks/mockServices";

const ServiceList = () => {
  return (
    <Container>
      <Grid2
        container
        spacing={4}
        sx={{ width: "100%", justifyContent: "center" }}
      >
        {services.map((service, index) => (
          <Grid2 xs={12} sm={6} md={4} lg={3} key={index}>
            <Card sx={{ width: 400, height: "auto" }}>
              <CardMedia
                component="img"
                height="140"
                image={service.image}
                alt={service.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {service.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default ServiceList;
