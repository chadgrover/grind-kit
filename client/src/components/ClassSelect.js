import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import "../styles/ClassSelect.css";
import axios from "axios";

function ClassSelect(props) {
  const {
    setClassSelected,
    setInstanceContentData,
    setCurrentLevel,
    inputRef,
  } = props;

  const handleGetInstanceContentData = async () => {
    const fetchedInstanceContent = await axios.get("/api/instancecontent");
    setInstanceContentData(fetchedInstanceContent.data);
  };

  const handlePaladinClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.pld_level);
    setClassSelected(true);
  };

  const handleWarriorClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.war_level);
    setClassSelected(true);
  };

  const handleDarkKnightClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.drk_level);
    setClassSelected(true);
  };

  const handleGunbreakerClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.gnb_level);
    setClassSelected(true);
  };

  const handleWhiteMageClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.whm_level);
    setClassSelected(true);
  };

  const handleScholarClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.sch_level);
    setClassSelected(true);
  };

  const handleAstrologianClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.ast_level);
    setClassSelected(true);
  };

  const handleSageClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.sge_level);
    setClassSelected(true);
  };

  const handleMonkClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.mnk_level);
    setClassSelected(true);
  };

  const handleDragoonClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.drg_level);
    setClassSelected(true);
  };

  const handleNinjaClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.nin_level);
    setClassSelected(true);
  };

  const handleSamuraiClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.sam_level);
    setClassSelected(true);
  };

  const handleReaperClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.rpr_level);
    setClassSelected(true);
  };

  const handleBardClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.brd_level);
    setClassSelected(true);
  };

  const handleMachinistClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.mch_level);
    setClassSelected(true);
  };

  const handleDancerClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.dnc_level);
    setClassSelected(true);
  };

  const handleBlackMageClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.smn_level);
    setClassSelected(true);
  };

  const handleSummonerClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.smn_level);
    setClassSelected(true);
  };

  const handleRedMageClick = async () => {
    handleGetInstanceContentData();
    setCurrentLevel(inputRef.current.rdm_level);
    setClassSelected(true);
  };

  return (
    <Grid container spacing={2}>
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
            <Button variant="contained" onClick={handlePaladinClick}>
              Paladin
            </Button>
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
            <Button variant="contained" onClick={handleWarriorClick}>
              Warrior
            </Button>
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
            <Button variant="contained" onClick={handleDarkKnightClick}>
              Dark Knight
            </Button>
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
            <Button variant="contained" onClick={handleGunbreakerClick}>
              Gunbreaker
            </Button>
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
            <Button variant="contained" onClick={handleWhiteMageClick}>
              White Mage
            </Button>
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
            <Button variant="contained" onClick={handleScholarClick}>
              Scholar
            </Button>
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
            <Button variant="contained" onClick={handleAstrologianClick}>
              Astrologian
            </Button>
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
            <Button variant="contained" onClick={handleSageClick}>
              Sage
            </Button>
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
            <Button variant="contained" onClick={handleMonkClick}>
              Monk
            </Button>
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
            <Button variant="contained" onClick={handleDragoonClick}>
              Dragoon
            </Button>
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
            <Button variant="contained" onClick={handleNinjaClick}>
              Ninja
            </Button>
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
            <Button variant="contained" onClick={handleSamuraiClick}>
              Samurai
            </Button>
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
            <Button variant="contained" onClick={handleReaperClick}>
              Reaper
            </Button>
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
            <Button variant="contained" onClick={handleBardClick}>
              Bard
            </Button>
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
            <Button variant="contained" onClick={handleMachinistClick}>
              Machinist
            </Button>
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
            <Button variant="contained" onClick={handleDancerClick}>
              Dancer
            </Button>
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
            <Button variant="contained" onClick={handleBlackMageClick}>
              Black Mage
            </Button>
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
            <Button variant="contained" onClick={handleSummonerClick}>
              Summoner
            </Button>
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
            <Button variant="contained" onClick={handleRedMageClick}>
              Red Mage
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
}

export default ClassSelect;
