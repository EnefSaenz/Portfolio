import React from "react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <title>Portafolio de proyectos</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Concert+One&family=Fredoka+One&family=Itim&family=Patrick+Hand&family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
