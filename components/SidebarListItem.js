import React, { useState } from "react";
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarListItem = ({ component, listItem }) => {
  //States
  const [open, setOpen] = useState(false);

  const { itemIcon, itemName } = listItem;

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FontAwesomeIcon icon={["fas", `${itemIcon}`]} />
        </ListItemIcon>
        <ListItemText primary={itemName} />
        {open ? (
          <FontAwesomeIcon icon={["fas", "chevron-up"]} />
        ) : (
          <FontAwesomeIcon icon={["fas", "chevron-down"]} />
        )}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {component}
      </Collapse>
      <Divider variant="inset" component="li" />
    </>
  );
};

export default SidebarListItem;
