import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";

function NavBar({ isOpen }) {
  return (
    <>
      {isOpen === true ? (
        <div>
          <nav>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/levelinput">Input</Link>
            <Link to="/session">Session</Link>
            <Link onClick={logout}>Logout</Link>
          </nav>
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
