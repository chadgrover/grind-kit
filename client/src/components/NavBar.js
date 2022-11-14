import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar({ isOpen }) {
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
