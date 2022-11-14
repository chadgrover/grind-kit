import "./App.css";
import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
import LevelInput from "./components/LevelInput";

function App() {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
        <Router>
        <NavBar isOpen={isOpen} />
          <Routes>
            <Route path="/" element={<Login setIsOpen={setIsOpen}/>} />
            <Route path="/register" element={<Register />} />
            <Route path="/reset" element={<Reset />} />
            <Route path="/dashboard" element={<Dashboard setIsOpen={setIsOpen}/>} />
            <Route path="/levelinput" element={<LevelInput />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
