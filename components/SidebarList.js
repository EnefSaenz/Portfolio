import React from "react";
import { Box, List, Rating, Stack, Typography } from "@mui/material";
import SidebarListItem from "./SidebarListItem";
import TimeLine from "./TimeLine";

const SidebarList = () => {
  const items = [
    {
      itemIcon: "user-tie",
      itemName: "Biography",
      itemComponent: (
        <Typography sx={{ px: 3, textAlign: "justify" }}>
          Focused on developing IT solutions with the newest technologies,
          taking advantage from the experience to get knowledge and for growing
          in both aspects, personally and professionally.
        </Typography>
      ),
    },
    {
      itemIcon: "business-time",
      itemName: "Work experience",
      itemComponent: <TimeLine />,
    },
    {
      itemIcon: "medal",
      itemName: "Skills",
      itemComponent: (
        <Stack spacing={2} alignItems="flex-end" sx={{ pr: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>ReactJS</Typography>
            <Rating
              sx={{ ml: 2 }}
              name="react"
              defaultValue={4}
              precision={0.5}
              size="large"
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>NodeJS</Typography>
            <Rating
              sx={{ ml: 2 }}
              name="node"
              defaultValue={3.5}
              precision={0.5}
              size="large"
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Java</Typography>
            <Rating
              sx={{ ml: 2 }}
              name="node"
              defaultValue={4}
              precision={0.5}
              size="large"
              readOnly
            />
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography>Spring Framework</Typography>
            <Rating
              sx={{ ml: 2 }}
              name="node"
              defaultValue={4}
              precision={0.5}
              size="large"
              readOnly
            />
          </Box>
        </Stack>
      ),
    },
  ];

  return (
    <List sx={{ width: "100%" }} component="nav">
      {items.map((item) => (
        <SidebarListItem
          key={item.itemName}
          listItem={item}
          component={item.itemComponent}
        />
      ))}
    </List>
  );
};

export default SidebarList;
