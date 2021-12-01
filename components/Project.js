import React from "react";
import {
  Grid,
  Card,
  Typography,
  Link,
  CardMedia,
  IconButton,
  CardContent,
  Avatar,
  CardHeader,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-material-ui-carousel"), {
  ssr: false,
});

const Project = ({ project }) => {
  // Destructuring
  const { name, description, url, images, urlGit, iconTech } = project;

  return (
    <Carousel indicators={false} swipe={false} fullHeightHover={false}>
      {images.map((img) => (
        <Card
          key={img.url}
          sx={{
            height: 500,
          }}
        >
          <CardHeader
            title={
              <Typography sx={{ fontFamily: "Fredoka One" }}>{name}</Typography>
            }
            subheader={<Typography>12/11/2021</Typography>}
            avatar={
              <Avatar sx={{ bgcolor: "black", color: "cyan" }}>
                <FontAwesomeIcon icon={["fab", `${iconTech}`]} />
              </Avatar>
            }
            action={
              <IconButton
                href={urlGit}
                aria-label="link to repo"
                sx={{ bgcolor: "transparent", color: "black", fontSize: 30 }}
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </IconButton>
            }
          />
          <Link href={url} color="inherit">
            <CardMedia
              image={img.url}
              sx={{
                height: "100%",
                cursor: "pointer",
                filter: "brightness(80%)",
                "&:hover": {
                  filter: "brightness(100%)",
                },
              }}
            />
          </Link>
          <CardContent
            sx={{
              position: "absolute",
              bottom: 0,
              bgcolor: "rgba(0,0,0,0.8)",
              color: "white",
              width: "100%",
            }}
          >
            <Typography sx={{ fontFamily: "Patrick Hand" }}>
              {description}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Carousel>
  );
};

export default Project;

/*
<Grid item xs={12} sm={6} md={4} lg={4}>
      
</Grid>
*/
