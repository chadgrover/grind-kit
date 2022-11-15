import React from "react";
import { TextField, InputAdornment, Button } from "@mui/material";
import { Save } from "@mui/icons-material"
import "../styles/LevelInput.css";
import axios from "axios";

function LevelInput(props) {

  const { inputRef, uid } = props;

  const handleSave = async () => {
    let identifier = {"user_uid": uid}
    let levels = inputRef.current;
    const merged = {...identifier, ...levels}

  }

  return (
    <div className="levelinput">
      <div className="levelinput__container">
        <div className="tank__container">
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Paladin"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) => {
                inputRef.current.pld_level = parseInt(event.target.value);
              }}
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Warrior"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.war_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Dark Knight"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.drk_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Gunbreaker"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.gnb_level = parseInt(event.target.value))
              }
            />
          </div>
        </div>
        <div className="healer__container">
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="White Mage"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.whm_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Scholar"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.sch_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Astrologian"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.ast_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Sage"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.sge_level = parseInt(event.target.value))
              }
            />
          </div>
        </div>
        <div className="dps__container">
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Monk"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.mnk_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Dragoon"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.drg_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Ninja"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.nin_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Samurai"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.sam_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Reaper"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.rpr_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Bard"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.brd_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Machinist"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.mch_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Dancer"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.dnc_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Black Mage"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.blm_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Summoner"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.smn_level = parseInt(event.target.value))
              }
            />
          </div>
          <div>
            <TextField
              inputProps={{ type: "number" }}
              label="Red Mage"
              id="outlined-start-adornment"
              sx={{ m: 1, width: "25ch" }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Level</InputAdornment>
                ),
              }}
              onChange={(event) =>
                (inputRef.current.rdm_level = parseInt(event.target.value))
              }
            />
          </div>
        </div>
        <Button variant="contained" endIcon={<Save />} onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default LevelInput;
