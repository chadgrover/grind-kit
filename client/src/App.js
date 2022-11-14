import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import LevelInput from "./components/LevelInput";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const [paladinLevel, setPaladinLevel] = useState(0);
  const [warriorLevel, setWarriorLevel] = useState(0);
  const [darkKnightLevel, setDarkKnightLevel] = useState(0);
  const [gunbreakerLevel, setGunbreakerLevel] = useState(0);
  const [whiteMageLevel, setWhiteMageLevel] = useState(0);
  const [scholarLevel, setScholarLevel] = useState(0);
  const [astrologianLevel, setAstrologianLevel] = useState(0);
  const [sageLevel, setSageLevel] = useState(0);
  const [monkLevel, setMonkLevel] = useState(0);
  const [dragoonLevel, setDragoonLevel] = useState(0);
  const [ninjaLevel, setNinjaLevel] = useState(0);
  const [samuraiLevel, setSamuraiLevel] = useState(0);
  const [reaperLevel, setReaperLevel] = useState(0);
  const [bardLevel, setBardLevel] = useState(0);
  const [machinistLevel, setMachinistLevel] = useState(0);
  const [dancerLevel, setDancerLevel] = useState(0);
  const [blackMageLevel, setBlackMageLevel] = useState(0);
  const [summonerLevel, setSummonerLevel] = useState(0);
  const [redMageLevel, setRedMageLevel] = useState(0);

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
            element={<Dashboard setIsOpen={setIsOpen} />}
          />
          <Route path="/levelinput" element={<LevelInput />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
