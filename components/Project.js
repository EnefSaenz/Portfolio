import React, { useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Link,
  Typography,
} from "@mui/material";
import { blue } from "@mui/material/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-material-ui-carousel"), {
  ssr: false,
});

const Project = ({ project, isActive }) => {
  // States
  const [expandedInfo, setExpandedInfo] = useState(false);

  // Destructuring
  const { name, description, url, images, urlGit, iconTech } = project;

  const handleExpandInfo = () => {
    setExpandedInfo(!expandedInfo);
  };

  return (
    <Card
      sx={{
        boxShadow: 7,
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[900], color: "white" }} aria-label="tech">
            <FontAwesomeIcon icon={["fab", `${iconTech}`]} />
          </Avatar>
        }
        title={name}
        subheader="September 14, 2016"
      />
      {isActive ? (
        <Carousel indicators={false} swipe={false} fullHeightHover={false}>
          {images.map((img) => (
            <Link key={img.url} href={url}>
              <CardMedia
                component="img"
                image={img.url}
                sx={{
                  height: 300,
                  cursor: "pointer",
                  filter: "brightness(90%)",
                  "&:hover": {
                    filter: "brightness(100%)",
                  },
                }}
              />
            </Link>
          ))}
        </Carousel>
      ) : (
        <CardMedia
          component="img"
          image={images[0].url}
          sx={{
            height: 300,
            filter: "brightness(90%)",
          }}
        />
      )}

      <CardActions>
        <Button
          size="small"
          color="primary"
          aria-label="more"
          onClick={handleExpandInfo}
          disabled={!isActive}
        >
          Learn More
        </Button>
        <Button
          href={urlGit}
          size="small"
          color="secondary"
          aria-label="github"
          sx={{ ml: "auto" }}
          endIcon={<FontAwesomeIcon icon={["fab", "github"]} />}
          disabled={!isActive}
        >
          View on
        </Button>
      </CardActions>
      {isActive && (
        <Collapse in={expandedInfo} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography>{description}</Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  );
};

export default Project;
