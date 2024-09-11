import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { Container } from "@mui/system";
const services = [
  {
    title: "Your AI agent",
    description: "Your AI agent will help you to achieve your goals.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Personal Training",
    description: "One-on-one personal training sessions.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Nutritional Counseling",
    description: "Customized meal plans and dietary advice.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Group Fitness Classes",
    description: "Join group classes for a motivating workout.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Wellness Coaching",
    description: "Guidance on achieving overall wellness goals.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Stress Management",
    description: "Techniques and practices for managing stress.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Yoga Classes",
    description: "Classes for improving flexibility and relaxation.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Running Programs",
    description: "Structured running programs for all levels.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Strength Training",
    description: "Programs to build muscle and strength.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Healthy Cooking Workshops",
    description: "Learn to prepare healthy and delicious meals.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
  {
    title: "Sleep Improvement",
    description: "Advice and strategies for better sleep.",
    image:
      "https://images.pexels.com/photos/414029/pexels-photo-414029.jpeg?auto=compress&cs=tinysrgb&h=500",
  },
];

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
