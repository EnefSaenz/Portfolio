import React, { useMemo, useState } from "react";
import colorModeContext from "./colorModeContext";
import {
  ThemeProvider,
  createTheme,
  responsiveFontSizes,
} from "@mui/material/styles";
import { blue, blueGrey, teal } from "@mui/material/colors";

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
                  divider: "#010101",
                  background: {
                    default: "#e3f0f8",
                    paper: "#badaef",
                  },
                  text: {
                    primary: "#000000",
                    secondary: "#313131",
                  },
                }
              : {
                  // palette values for dark mode
                  primary: {
                    light: "#df78ef",
                    main: "#ab47bc",
                    dark: "#12005e",
                    contrastText: "#ffffff",
                  },
                  secondary: {
                    light: "#eb5e54",
                    main: "#b32b2b",
                    dark: "#7c0002",
                    contrastText: "#ffffff",
                  },
                  divider: "#efefef",
                  background: {
                    default: "#205c9c",
                    paper: "#13407c",
                  },
                  text: {
                    primary: "#ffffff",
                    secondary: "#efefef",
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
