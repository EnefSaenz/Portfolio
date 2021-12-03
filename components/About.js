import React from "react";
import { Avatar, Box, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

const About = () => {
  return (
    <>
      <Stack
        justifyContent="center"
        alignItems="center"
        spacing={2}
        sx={{ p: 1 }}
      >
        <Avatar
          alt="Emmanuel Sáenz"
          src="/static/img/avatar.jpg"
          sx={{ width: 100, height: 100, bgcolor: teal[700], fontSize: 36 }}
        >
          ES
        </Avatar>
        <Typography
          variant="h4"
          align="center"
          sx={{ textTransform: "uppercase", fontFamily: "Concert One" }}
          gutterBottom
        >
          Emmanuel Sáenz
        </Typography>
        <Typography variant="h6" align="center" gutterBottom>
          Bienvenido a mi portafolio
        </Typography>
      </Stack>
    </>
  );
};

export default About;
