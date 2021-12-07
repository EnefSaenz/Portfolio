import React, { useMemo, useState } from "react";
import colorModeContext from "./colorModeContext";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";

const ColorModeProvider = (props) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = useMemo(
    () =>
      responsiveFontSizes(
        createTheme({
          palette: {
            mode,
            ...(mode === "light"
              ? {
                  // palette values for light mode
                  primary: {
                    light: "#9c4dcc",
                    main: "#6a1b9a",
                    dark: "#38006b",
                    contrastText: "#ffffff",
                  },
                  secondary: {
                    light: "#eb5e54",
                    main: "#b32b2b",
                    dark: "#7c0002",
                    contrastText: "#ffffff",
                  },
                  divider: "rgba(0, 0, 0, 0.12)",
                  background: {
                    default: "#e6e6e6",
                    paper: "#ffffff",
                  },
                  text: {
                    primary: "rgba(0, 0, 0, 0.87)",
                    secondary: "rgba(0, 0, 0, 0.6)",
                    disabled: "rgba(0, 0, 0, 0.38)",
                  },
                }
              : {
                  // palette values for dark mode
                  primary: {
                    light: "#a9c36b",
                    main: "#94B447",
                    dark: "#677d31",
                    contrastText: "#ffffff",
                  },
                  secondary: {
                    light: "#7bb9b3",
                    main: "#5BA8A0",
                    dark: "#3f7570",
                    contrastText: "#ffffff",
                  },
                  divider: "#263238",
                  background: {
                    default: "#001e3c",
                    paper: "rgb(10, 25, 41)",
                  },
                  text: {
                    primary: "#ffffff",
                    secondary: "rgba(255,255,255,0.7)",
                  },
                }),
          },
          typography: {
            fontFamily: "Itim, cursive",
            h1: { fontFamily: "Fredoka One, cursive" },
            h2: { fontFamily: "Fredoka One, cursive" },
            h3: { fontFamily: "Fredoka One, cursive" },
            h4: { fontFamily: "Patrick Hand, cursive" },
            h5: { fontFamily: "Fredoka One, cursive" },
            h6: { fontFamily: "Patrick Hand, cursive" },
          },
        })
      ),
    [mode]
  );

  return (
    <colorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{props.children}</ThemeProvider>
    </colorModeContext.Provider>
  );
};

export default ColorModeProvider;
