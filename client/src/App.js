import "./App.css";
import React, { useState, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef({});

  return (
    <div className="App">
      <Router>
        <NavBar isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Login setIsOpen={setIsOpen} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route
            path="/dashboard"
            element={<Dashboard inputRef={inputRef} setIsOpen={setIsOpen} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
