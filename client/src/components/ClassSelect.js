import React, { useState } from "react";
import { Button } from "@mui/material";
import "../styles/ClassSelect.css";
import axios from "axios";

function ClassSelect(props) {
  const { setClassSelected, setInstanceContentData } = props;

  const handleClick = async () => {
    const fetchedInstanceContent = await axios.get("/api/instancecontent");
    setInstanceContentData(fetchedInstanceContent.data);
    setClassSelected(true);
  };

  return (
    <div className="classselect">
      <div className="classselect__container">
        <div className="tank__container">
          <Button variant="contained" onClick={handleClick}>
            Paladin
          </Button>
          <Button variant="contained">Warrior</Button>
          <Button variant="contained">Dark Knight</Button>
          <Button variant="contained">Gunbreaker</Button>
        </div>
        <div className="healer__container">
          <Button variant="contained">White Mage</Button>
          <Button variant="contained">Scholar</Button>
          <Button variant="contained">Astrologian</Button>
          <Button variant="contained">Sage</Button>
        </div>
        <div className="dps__container">
          <Button variant="contained">Monk</Button>
          <Button variant="contained">Dragoon</Button>
          <Button variant="contained">Ninja</Button>
          <Button variant="contained">Samurai</Button>
          <Button variant="contained">Reaper</Button>
          <Button variant="contained">Bard</Button>
          <Button variant="contained">Machinist</Button>
          <Button variant="contained">Dancer</Button>
          <Button variant="contained">Black Mage</Button>
          <Button variant="contained">Summoner</Button>
          <Button variant="contained">Red Mage</Button>
        </div>
      </div>
    </div>
  );
}

export default ClassSelect;
