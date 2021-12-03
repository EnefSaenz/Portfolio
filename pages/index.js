import React, { useContext, useState } from "react";
// From Material UI
import {
  Avatar,
  Box,
  Container,
  Drawer,
  Divider,
  Fab,
  Typography,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import { teal } from "@mui/material/colors";
// From FontAwesomeIcons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// From Components
import colorModeContext from "../contexts/colorModeContext";
import Layout from "../components/Layout";
import About from "../components/About";
import TimeLine from "../components/TimeLine";
import SwiperContent from "../components/SwiperContent";

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
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
      "@media (min-width: 900px)": {
        marginLeft: "30%",
      },
    }),
  })
);

export default function Home() {
  //States
  const [open, setOpen] = useState(false);

  // Theming
  const theme = useTheme();

  // Contexts
  const colorMode = useContext(colorModeContext);

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
            zIndex: "speedDial",
            width: { xs: 140, sm: 150 },
            height: { xs: 40, sm: 50 },
            justifyContent: "normal",
            pl: 1,
            borderRadius: "0px 25px 25px 0px",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
          }}
          onClick={handleDrawerOpen}
        >
          <Typography
            variant="h5"
            sx={{
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
              height: { xs: 40, sm: 50 },
              width: { xs: 40, sm: 50 },
            }}
          >
            ES
          </Avatar>
        </Fab>

        <Fab
          aria-label="mode"
          size="small"
          sx={{
            position: "fixed",
            right: 10,
            top: 10,
            zIndex: "speedDial",
            bgcolor: "white",
            "&:hover": {
              bgcolor: "#e0e0e0",
            },
          }}
          onClick={colorMode.toggleColorMode}
        >
          {theme.palette.mode === "dark" ? (
            <FontAwesomeIcon icon={["fas", "sun"]} />
          ) : (
            <FontAwesomeIcon icon={["fas", "moon"]} />
          )}
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
            color="secondary"
            sx={{
              position: "absolute",
              right: 10,
              top: 10,
              fontSize: 26,
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
          <Box
            sx={{
              py: 5,
              mb: 3,
              backgroundColor: "primary.dark",
              color: "primary.contrastText",
            }}
          >
            <Typography variant="h1" align="center">
              Welcome!
            </Typography>
            <Typography variant="h4" align="center">
              Let&apos;s take a look of some projects developed by Sáenz
            </Typography>
          </Box>
          <SwiperContent />
        </Main>
      </Container>
    </Layout>
  );
}
