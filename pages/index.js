import React, { useState } from "react";

import {
  Container,
  Grid,
  Fab,
  Avatar,
  Drawer,
  IconButton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Layout from "../components/Layout";
import About from "../components/About";
import Project from "../components/Project";

const projects = [
  {
    id: 1,
    name: "MERN Tasks",
    url: "https://mern-tasks-by-enef.netlify.app/",
    img: "/static/img/projects/1.jpg",
    urlGit: "https://github.com/EnefSaenz/merntasks-client",
  },
  {
    id: 2,
    name: "Product Hunt",
    url: "http://google.com",
    img: "/static/img/projects/2.jpg",
    urlGit: "https://github.com/EnefSaenz/merntasks-server",
  },
  {
    id: 3,
    name: "Drinks recipes",
    url: "https://drinks-recipes-by-enef.netlify.app/",
    img: "/static/img/projects/3.jpg",
    urlGit: "https://github.com/EnefSaenz/DrinksRecipes",
  },
  {
    id: 4,
    name: "Products Inventory",
    url: "https://products-inventory-by-enef.netlify.app/",
    img: "/static/img/projects/4.jpg",
    urlGit: "https://github.com/EnefSaenz/CRUDReduxClient",
  },
  {
    id: 5,
    name: "Cotizador de CryptoMonedas",
    url: "https://crypto-quoter-by-enef.netlify.app/",
    img: "/static/img/projects/5.jpg",
    urlGit: "https://github.com/EnefSaenz/CryptoCurrencies",
  },
  {
    id: 6,
    name: "Images browser",
    url: "https://images-browser-by-enef.netlify.app/",
    img: "/static/img/projects/6.jpg",
    urlGit: "https://github.com/EnefSaenz/Pixabay",
  },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: 0,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: 0,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: "100%",
      "@media (min-width: 900px)": {
        marginLeft: "30%",
      },
    }),
  })
);

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function Home() {
  const [open, setOpen] = useState(false);

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
          aria-label="add"
          sx={{
            position: "fixed",
            left: 5,
            top: 5,
            zIndex: 1001,
            bgcolor: "transparent",
          }}
          onClick={handleDrawerOpen}
        >
          <Avatar
            alt="Emmanuel Sáenz"
            src="/static/img/avatar.jpg"
            sx={{
              width: "100%",
              height: "100%",
              bgcolor: "transparent",
              fontSize: 58,
              color: teal[700],
              filter: "brightness(95%)",
              "&:hover": {
                filter: "brightness(100%)",
              },
            }}
          >
            <FontAwesomeIcon icon={["fas", "chevron-circle-right"]} />
          </Avatar>
        </Fab>

        <Drawer
          sx={{
            width: "100%",
            flexShrink: 0,
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
          <DrawerHeader>
            About me!
            <IconButton
              onClick={handleDrawerClose}
              sx={{ color: teal[700], fontSize: 36 }}
            >
              <FontAwesomeIcon icon={["fas", "chevron-circle-left"]} />
            </IconButton>
          </DrawerHeader>
          <About />
        </Drawer>
        <Main open={open}>
          <Grid
            container
            spacing={0}
            sx={{ marginBottom: 5 }}
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
