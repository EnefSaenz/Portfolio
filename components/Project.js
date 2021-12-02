import React, { useState } from "react";
import {
  Card,
  Typography,
  Link,
  CardContent,
  Avatar,
  CardHeader,
  CardActions,
  Collapse,
  Button,
  CardMedia,
} from "@mui/material";
import { teal } from "@mui/material/colors";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import dynamic from "next/dynamic";

const Carousel = dynamic(() => import("react-material-ui-carousel"), {
  ssr: false,
});

const Project = ({ project }) => {
  // States
  const [expandedInfo, setExpandedInfo] = useState(false);

  // Destructuring
  const { name, description, url, images, urlGit, iconTech } = project;

  const handleExpandInfo = () => {
    setExpandedInfo(!expandedInfo);
  };

  return (
    <Card>
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
      />
      <Carousel indicators={false} swipe={false} fullHeightHover={false}>
        {images.map((img) => (
          <Link href={url} color="inherit">
            <CardMedia
              component="img"
              image={img.url}
              sx={{
                height: 300,
                cursor: "pointer",
                filter: "brightness(80%)",
                "&:hover": {
                  filter: "brightness(100%)",
                },
              }}
            />
          </Link>
        ))}
      </Carousel>
      <CardActions disableSpacing>
        <Button
          size="small"
          sx={{ color: teal[700] }}
          onClick={handleExpandInfo}
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
        >
          View on
        </Button>
      </CardActions>
      <Collapse in={expandedInfo} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography sx={{ fontFamily: "Patrick Hand" }}>
            {description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default Project;
