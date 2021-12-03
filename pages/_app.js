import React from "react";

import ColorModeProvider from "../contexts/ColorModeProvider";
import CssBaseline from "@mui/material/CssBaseline";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";

import "../styles/globals.css";
library.add(fas, fab);

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
