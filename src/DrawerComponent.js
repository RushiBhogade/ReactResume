import React from "react";
import { Link, useLocation } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Typography } from "@mui/material";
import "./DrawerComponent.css";

const DrawerComponent = ({ isOpen, toggleDrawer }) => {
  const location = useLocation();

  const handleListItemClick = () => {
    toggleDrawer(false); // Close the drawer when a list item is clicked
  };

  return (
    <Drawer
      style={{ margin: 20 }}
      anchor="left"
      open={isOpen}
      onClose={toggleDrawer}
      classes={{ paper: "drawer-paper" }}
    >
      <div className="drawer-content">
        <Typography variant="h6" className="drawer-header">
          Menu
        </Typography>
        <List className="drawer-list">
          <ListItem
            button
            component={Link}
            to="/"
            selected={location.pathname === "/"}
            className="drawer-item"
            onClick={handleListItemClick} // Close the drawer when this item is clicked
          >
            <ListItemText primary="Dashboard" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/project"
            selected={location.pathname === "/project"}
            className="drawer-item"
            onClick={handleListItemClick} // Close the drawer when this item is clicked
          >
            <ListItemText primary="Projects" />
          </ListItem>
          <ListItem
            button
            component={Link}
            to="/contact"
            selected={location.pathname === "/contact"}
            className="drawer-item"
            onClick={handleListItemClick} // Close the drawer when this item is clicked
          >
            <ListItemText primary="Contact" />
          </ListItem>
          {/* Add more list items for other screens */}
        </List>
      </div>
    </Drawer>
  );
};

export default DrawerComponent;
