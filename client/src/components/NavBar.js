import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar({ isOpen }) {
  return (
    <>
      {isOpen === true ? (
        <Link to="/levelinput">Job Levels</Link>
      ) : (
        <p>Grind-Kit</p>
      )}
    </>
  );
}
