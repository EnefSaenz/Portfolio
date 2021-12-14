import React from "react";
import Biography from "./Biography";
import SidebarListItem from "./SidebarListItem";
import Skills from "./Skills";
import TimeLine from "./TimeLine";

const SidebarList = () => {
  const items = [
    {
      itemIcon: "user-tie",
      itemName: "Biography",
      itemComponent: <Biography />,
    },
    {
      itemIcon: "business-time",
      itemName: "Work experience",
      itemComponent: <TimeLine />,
    },
    {
      itemIcon: "medal",
      itemName: "Skills",
      itemComponent: <Skills />,
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
