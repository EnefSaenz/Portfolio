import React from "react";
import { List } from "@mui/material";
import SidebarListItem from "./SidebarListItem";

const SidebarList = () => {
  const items = [
    {
      itemIcon: "user-tie",
      itemName: "Biography",
    },
    {
      itemIcon: "business-time",
      itemName: "Experience",
    },
    {
      itemIcon: "medal",
      itemName: "Skills",
    },
  ];

  return (
    <List sx={{ width: "100%" }} component="nav">
      {items.map((item) => (
        <SidebarListItem key={item.itemName} listItem={item} />
      ))}
    </List>
  );
};

export default SidebarList;
