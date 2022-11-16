import "./App.css";
import React, { useState, useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import Session from "./components/Session";
import LevelInput from "./components/LevelInput";
import axios from "axios";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createTheme, ThemeProvider } from "@mui/material";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [uid, setUid] = useState("");
  const [allUserData, setAllUserData] = useState([]);
  const inputRef = useRef({});

  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#13293D",
      },
      secondary: {
        main: "#16324F",
      },
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#000000",
      secondary: "#ffffffb3",
    },
  });

  const handleGetId = async () => {
    const data = await axios.get("/api/levels");
    setAllUserData(data.data);
  };

  useEffect(() => {
    handleGetId();
  }, [isOpen]);

  useEffect(() => {
    console.log(allUserData);
  }, [allUserData]);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <NavBar isOpen={isOpen} />
        <Routes>
          <Route path="/" element={<Login setIsOpen={setIsOpen} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/session" element={<Session inputRef={inputRef} />} />
          <Route
            path="/levelinput"
            element={<LevelInput inputRef={inputRef} uid={uid} />}
          />
          <Route
            path="/dashboard"
            element={<Dashboard setIsOpen={setIsOpen} setUid={setUid} />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
