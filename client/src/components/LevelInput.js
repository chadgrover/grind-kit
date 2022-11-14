import React, {useState, useEffect} from "React";
import { TextField, InputAdornment } from '@mui/material';

function LevelInput () {
    return (
        <TextField
        label="Paladin"
        id="outlined-start-adornment"
        sx={{ m: 1, width: '25ch' }}
        InputProps={{
          startAdornment: <InputAdornment position="start">LVL</InputAdornment>,
        }}
      />
    )
}

export default LevelInput;