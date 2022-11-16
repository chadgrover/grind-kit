import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";
import { AppBar, Toolbar, Typography } from "@mui/material";
import "../styles/NavBar.css";

function NavBar({ isOpen }) {
  return (
    <>
      {isOpen === true ? (
        <div className="navbar">
          <AppBar position="static">
            <Toolbar>
              <div className="logo">
                <Typography variant="h4">Grind Kit</Typography>
              </div>
              <ul className="nav-links">
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/dashboard">
                    Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/levelinput">
                    Job Levels
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} to="/session">
                    Dungeons
                  </Link>
                </li>
                <li className="nav-item">
                  <Link style={{ textDecoration: 'none' }} onClick={logout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </Toolbar>
          </AppBar>
        </div>
      ) : (
        <div>
          <p>Log-in Page</p>
        </div>
      )}
    </>
  );
}

export default NavBar;
