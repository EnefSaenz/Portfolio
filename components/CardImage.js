import React from "react";
import {
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

const CardImage = ({ img }) => {
  // Destructuring
  const { url } = img;

  return (
    <Card
      key={img.url}
      sx={{
        height: 300,
      }}
    >
      <CardHeader
        title={
          <Typography sx={{ fontFamily: "Fredoka One" }}>MERN Tasks</Typography>
        }
        subheader={<Typography>12/11/2021</Typography>}
        avatar={
          <Avatar sx={{ bgcolor: "black", color: "cyan" }}>
            <FontAwesomeIcon icon={["fab", "react"]} />
          </Avatar>
        }
        action={
          <IconButton
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
        <Typography>Proyecto que consume una API de imágenes.</Typography>
      </CardContent>
    </Card>
  );
};

export default CardImage;
