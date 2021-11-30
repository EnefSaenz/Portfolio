import React, { useState, useEffect } from "react";

import {
  Container,
  Grid,
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
import Project from "../components/Project";
import TimeLine from "../components/TimeLine";
import axiosClient from "../config/axios";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
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
      marginLeft: "100%",
      "@media (min-width: 900px)": {
        marginLeft: "30%",
      },
    }),
  })
);

export default function Home() {
  //States
  const [projects, setProjects] = useState([]);
  const [open, setOpen] = useState(true);

  // Effect for loading projects
  useEffect(() => {
    const getProjects = async () => {
      const response = await axiosClient.get("/projects");

      setProjects(response.data);
    };

    getProjects();
  }, []);

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
            left: 10,
            top: "10%",
            zIndex: 1001,
            width: 150,
            height: 50,
            justifyContent: "normal",
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
              boxSizing: "border-box",
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
          <Grid
            container
            spacing={1}
            sx={{ p: 1 }}
            columns={open && { md: 4, lg: 8 }}
          >
            {projects.map((project) => (
              <Project key={project.id} project={project} />
            ))}
          </Grid>
        </Main>
      </Container>
    </Layout>
  );
}
