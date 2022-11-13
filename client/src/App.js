import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login"

function App() {
  // Below is code for returning the list of dungeon names and required levels

  ////import { useState, useEffect } from "react";
  //import axios from 'axios';
  // const [instanceContent, setInstanceContent] = useState([]);

  // useEffect(() => {
  //   getInstanceContent();
  // }, [])

  // const getInstanceContent = async () => {
  //   const arrayOfInstanceContent = await axios.get('/api/instancecontent');
  //   const arrayOfFilteredInstanceContent = arrayOfInstanceContent.data.filter(dungeon => dungeon.name && dungeon.required_level);
  //   const arrayOfInstanceContentNames = arrayOfFilteredInstanceContent.map ((dungeon) => {
  //     return <p>{dungeon.name} Level: {dungeon.required_level}</p>;
  //   });
  //   setInstanceContent(arrayOfInstanceContentNames);
  // }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
