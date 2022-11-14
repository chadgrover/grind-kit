import React from "react";
import { Link } from "react-router-dom";
import { logout } from "../firebase";

function NavBar({ isOpen }) {
  return (
    <>
      {isOpen === true ? (
        <div>
          <nav>
            <Link to="/dashboard">Home</Link>
            <Link to="/levelinput">Job Levels</Link>
          </nav>
        </div>
      ) : (
        <div>
          <p>Grind Kit Logo</p>
        </div>
      )}
    </>
  );
}

export default NavBar;
