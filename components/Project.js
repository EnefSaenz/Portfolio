import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, Card, CardMedia, Typography, Stack, Link } from "@mui/material";

const Project = ({ project }) => {
  const { name, url, img, urlGit } = project;

  return (
    <Grid item xs={12} sm={6} md={4} lg={4}>
      <Card
        sx={{
          height: 300,
          position: "relative",
          borderRadius: 0,
        }}
      >
        <Link href={url} color="inherit">
          <CardMedia
            image={img}
            title={name}
            sx={{
              backgroundColor: "white",
              height: "100%",
              overflow: "hidden",
              position: "relative",
              transition: "300ms",
              cursor: "pointer",
              filter: "brightness(80%)",
              "&:hover": {
                filter: "brightness(100%)",
              },
            }}
          ></CardMedia>
        </Link>
        <Typography
          variant="h5"
          px={1}
          sx={{
            textOverflow: "ellipsis",
            position: "absolute",
            bottom: 0,
            backgroundColor: "black",
            color: "white",
            opacity: 0.6,
            width: "100%",
            height: "10%",
            fontFamily: "Concert One",
            transition: "300ms",
            cursor: "default",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          <span>{name}</span>
          <Stack
            direction="row"
            spacing={1}
            sx={{ float: "right", height: "100%" }}
          >
            <Link href={urlGit} color="inherit">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </Link>
          </Stack>
        </Typography>
      </Card>
    </Grid>
  );
};

export default Project;
