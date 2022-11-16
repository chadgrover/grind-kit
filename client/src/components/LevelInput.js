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

  const cardStyle = {
    height: "100%",
  };

  return (
    <div>
      <Grid sx={{ m: 1 }} container spacing={2}>
        <Grid item xs={3}>
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                These loyal guardians are skilled with sword and shield,
                channeling upon holy power to stand as unbreakable walls for
                their allies, and symbolizes hope among their people.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                Wielding greataxes they can unleash magnificent damage to block
                enemies from reaching their brothers-in-arms, while excelling in
                the art of causing pain.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                These dark, yet valiant knights bask in the darkness to empower
                themselves seeking to deliver justice and protection to the
                people of Ishgard.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Gunbreaker</strong> is a Tank job released in
                Shadowbringers expansion.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                In the midst of war, battles, and catastrophes, white mages come
                to move their allies forward with the touch of divine light.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                Only the scholars may command their conjured faeries to cast
                healing abilities and restore their fellows in battle.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                By attuning to the constellations, astrologians can draw cards
                to unveil mystical magicks to aid their allies in battle.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Sages</strong> are a Disciple of Magic job introduced in
                Endwalker, who heals and protects the party with barriers.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                Their moves include all sorts of fast sequenced physical combos,
                with a flurry of punches and kicks which build up even greater
                strength as they unlock their inner chakra.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Dragoons</strong> are fierce combatants who draw their
                battling techniques from Ishgard's long conflict against
                dragons.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Ninjas</strong> learn the secret arts of ninjutsu to
                turn the tide of the fight when their prey less expects.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                These fierce honorable men and women wield their katanas,
                weaving through moves of past eras to strive and kill before the
                enemy strikes their people.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Reapers</strong> are a Disciple of War who wields a
                scythe for dynamic close-quarter combat and calls upon an avatar
                from the void to join in battle.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                Born as archers, these minstrels learned how to evoke magicks to
                empower their allies' spirits, greatly boosting their prowess in
                battle.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Machinists</strong> are artificers specialized into
                building all sorts of mechanical equipment to use in battle.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Dancers</strong> are Disciple of War that uses Throwing
                Weapons to deal damage to targets from afar.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Black Mages</strong> extrapolate the dark arts of black
                magic, granting themselves a wide range of destructive spells.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                <strong>Summoners</strong> are mystical mages who have harnessed
                the lost art of invoking primals.
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
          <Card style={cardStyle} sx={{ maxWidth: 345 }}>
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
                These fierce mages combine black and white magic to twist the
                battlefield, and strive where others otherwise would fail.
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
      <div className="button__container">
        <Button variant="contained" endIcon={<Save />} onClick={handleSave}>
          Save
        </Button>
      </div>
    </div>
  );
}

export default LevelInput;
