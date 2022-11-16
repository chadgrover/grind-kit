import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/NavBar.css";

function NavBar({ isOpen }) {
  return (
    <>
      {isOpen === true ? (
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h4">Grind Kit</Typography>
            <div>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/levelinput">Input</Link>
              <Link to="/session">Session</Link>
              <Link onClick={logout}>Logout</Link>
            </div>
          </Toolbar>
        </AppBar>
      ) : (
        <div>
          <p>Log-in Page</p>
        </div>
      )}
    </>
  );
}

export default NavBar;
