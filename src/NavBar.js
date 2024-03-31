import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu"; // Import Menu icon
import Typography from "@mui/material/Typography";
import DrawerComponent from "./DrawerComponent";
import { useLocation } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div">
            {getTitle(location.pathname)}
          </Typography>
        </Toolbar>
      </AppBar>
      <DrawerComponent isOpen={isOpen} toggleDrawer={toggleDrawer} />
    </>
  );
};

const getTitle = (path) => {
  switch (path) {
    case "/":
      return "Dashboard";
    case "/project":
      return "Projects";
    case "/contact":
      return "Contact";
    default:
    //   return "Home";
  }
};

export default NavBar;
