import React from "react";
import {
  TextField,
  InputAdornment,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Save } from "@mui/icons-material";
import "../styles/LevelInput.css";
import axios from "axios";

function LevelInput(props) {
  const { inputRef, uid } = props;

  const handleSave = async () => {
    let identifier = { user_uid: uid };
    let levels = inputRef.current;
    const merged = { ...identifier, ...levels };

    await axios.post("/api/levels", merged);
  };

  return (
    <div>
      <Grid sx={{ m: 1 }} container spacing={2}>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/pld.jpg")}
              alt="Paladin Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Paladin
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Paladin description
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Paladin"
                defaultValue={
                  parseInt(inputRef.current.pld_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/war.jpg")}
              alt="Warrior Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Warrior
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Warrior description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Warrior"
                defaultValue={
                  parseInt(inputRef.current.war_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/drk.jpg")}
              alt="Dark Knight Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dark Knight
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dark Knight description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Dark Knight"
                defaultValue={
                  parseInt(inputRef.current.drk_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/gnb.jpg")}
              alt="Gunbreaker Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Gunbreaker
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Gunbreaker description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Gunbreaker"
                defaultValue={
                  parseInt(inputRef.current.gnb_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/whm.jpg")}
              alt="White Mage Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                White Mage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                White Mage description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="White Mage"
                defaultValue={
                  parseInt(inputRef.current.whm_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/sch.jpg")}
              alt="Scholar Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Scholar
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Scholar description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Scholar"
                defaultValue={
                  parseInt(inputRef.current.sch_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/ast.jpg")}
              alt="Astrologian Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Astrologian
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Astrologian description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Astrologian"
                defaultValue={
                  parseInt(inputRef.current.ast_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/sge.jpg")}
              alt="Sage Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Sage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Sage description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Sage"
                defaultValue={
                  parseInt(inputRef.current.sge_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/mnk.jpg")}
              alt="Monk Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Monk
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Monk description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Monk"
                defaultValue={
                  parseInt(inputRef.current.mnk_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/drg.jpg")}
              alt="Dragoon Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dragoon
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dragoon description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Dragoon"
                defaultValue={
                  parseInt(inputRef.current.drg_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/nin.jpg")}
              alt="Ninja Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Ninja
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ninja description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Ninja"
                defaultValue={
                  parseInt(inputRef.current.nin_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/sam.jpg")}
              alt="Samurai Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Samurai
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Samurai description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Samurai"
                defaultValue={
                  parseInt(inputRef.current.sam_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/rpr.jpg")}
              alt="Reaper Sprite"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Reaper
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Reaper description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Reaper"
                defaultValue={
                  parseInt(inputRef.current.rpr_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/brd.jpg")}
              alt="Bard Sprite"
              sx={{ objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Bard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Bard description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Bard"
                defaultValue={
                  parseInt(inputRef.current.brd_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/mch.jpg")}
              alt="Machinist Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Machinist
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Machinist description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Machinist"
                defaultValue={
                  parseInt(inputRef.current.mch_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/dnc.jpg")}
              alt="Dancer Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Dancer
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dancer description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Dancer"
                defaultValue={
                  parseInt(inputRef.current.dnc_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/blm.jpg")}
              alt="Black Mage Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Black Mage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Black Mage description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Black Mage"
                defaultValue={
                  parseInt(inputRef.current.blm_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/smn.jpg")}
              alt="Summoner Sprite"
              sx={{ objectPosition: "center", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Summoner
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Summoner description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Summoner"
                defaultValue={
                  parseInt(inputRef.current.smn_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="140"
              image={require("../images/rdm.jpg")}
              alt="Red Mage Sprite"
              sx={{ objectPosition: "top", objectFit: "cover" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Red Mage
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Red Mage description goes here
              </Typography>
            </CardContent>
            <CardActions>
              <TextField
                inputProps={{ type: "number" }}
                label="Red Mage"
                defaultValue={
                  parseInt(inputRef.current.rdm_level) || parseInt(0)
                }
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
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      <Button variant="contained" endIcon={<Save />} onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default LevelInput;
