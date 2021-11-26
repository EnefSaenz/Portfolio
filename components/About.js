import React from "react";
import { Avatar, Stack, Typography } from "@mui/material";
import { teal } from "@mui/material/colors";

const About = () => {
  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{ p: 2 }}
    >
      <Avatar
        alt="Emmanuel Sáenz"
        src="/static/img/avatar.jpg"
        sx={{ width: 200, height: 200, bgcolor: teal[700], fontSize: 72 }}
      >
        ES
      </Avatar>

      <Typography
        variant="h3"
        gutterBottom
        component="div"
        color="white"
        sx={{ textTransform: "uppercase", fontFamily: "Concert One" }}
      >
        Emmanuel Sáenz
      </Typography>

      <Typography
        variant="h4"
        gutterBottom
        component="div"
        sx={{ fontFamily: "Patrick Hand" }}
      >
        Bienvenido a mi portafolio
      </Typography>
    </Stack>
  );
};

export default About;
