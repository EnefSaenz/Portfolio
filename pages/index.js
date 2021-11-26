import { Container, Grid } from "@mui/material";
import About from "../components/About";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default function Home() {
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

  return (
    <Layout>
      <Container maxWidth={false} sx={{ paddingY: 2, paddingX: 0 }}>
        <About />
        <Grid container spacing={1} sx={{ marginBottom: 5 }}>
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </Grid>
      </Container>
    </Layout>
  );
}
