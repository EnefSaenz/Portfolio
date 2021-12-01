import React, { useState } from "react";

import {
  Container,
  Fab,
  Avatar,
  Drawer,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import About from "../components/About";
import TimeLine from "../components/TimeLine";
import SwiperContent from "../components/SwiperContent";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    paddingTop: 70,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 30,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: "5ms",
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: "5ms",
      }),
      "@media (min-width: 900px)": {
        marginLeft: "30%",
      },
    }),
  })
);

export default function Home() {
  //States
  const [open, setOpen] = useState(true);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Layout>
      <Container
        maxWidth={false}
        sx={{
          padding: 0,
          "@media (min-width: 600px)": {
            paddingX: 0,
          },
        }}
      >
        <Fab
          variant="extended"
          aria-label="about"
          sx={{
            position: "fixed",
            left: 0,
            top: 10,
            zIndex: 1001,
            width: 140,
            height: 40,
            justifyContent: "normal",
            pl: 1,
            borderRadius: "0px 24px 24px 0px",
          }}
          onClick={handleDrawerOpen}
        >
          <Typography
            sx={{
              fontSize: 20,
              fontFamily: "Fredoka One",
              background:
                "linear-gradient(90deg,rgba(0, 127, 128, 1) 0%,rgba(184, 33, 142, 1) 33%,rgba(75, 233, 255, 1) 69%,rgba(0, 127, 128, 1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            About
          </Typography>
          <Avatar
            alt="Emmanuel Sáenz"
            src="/static/img/avatar.jpg"
            sx={{
              bgcolor: teal[700],
              color: "white",
              position: "absolute",
              right: 0,
              height: "100%",
              width: "auto",
            }}
          >
            ES
          </Avatar>
        </Fab>

        <Drawer
          sx={{
            width: "100%",
            flexShrink: 0,
            position: "relative",
            "& .MuiDrawer-paper": {
              width: "inherit",
            },
            "@media (min-width: 900px)": {
              width: "30%",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <Fab
            aria-label="about"
            sx={{
              position: "absolute",
              right: 20,
              top: 10,
              fontSize: 26,
              bgcolor: teal[700],
              color: "white",
              "&:hover": {
                bgcolor: teal[800],
              },
            }}
            onClick={handleDrawerClose}
          >
            <FontAwesomeIcon icon={["fas", "chevron-left"]} />
          </Fab>
          <About />
          <Divider />
          <TimeLine />
        </Drawer>
        <Main open={open}>
          <SwiperContent />
        </Main>
      </Container>
    </Layout>
  );
}
