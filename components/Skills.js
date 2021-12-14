import React, { useState, useEffect } from "react";
import { Box, Rating, Stack, Typography } from "@mui/material";

import axiosClient from "../config/axios";

const Skills = () => {
  //States
  const [skills, setSkills] = useState([]);

  // Effect for loading projects
  useEffect(() => {
    const getSkills = async () => {
      const response = await axiosClient.get("/skills");

      setSkills(response.data);
    };

    getSkills();
  }, []);

  return (
    <Stack spacing={2} alignItems="flex-end" sx={{ pr: 2 }}>
      {skills.map((skill) => (
        <Box key={skill.id} sx={{ display: "flex", alignItems: "center" }}>
          <Typography>{skill.name}</Typography>
          <Rating
            sx={{ ml: 2 }}
            name={skill.name}
            defaultValue={skill.value}
            precision={0.5}
            size="large"
            readOnly
          />
        </Box>
      ))}
    </Stack>
  );
};

export default Skills;
