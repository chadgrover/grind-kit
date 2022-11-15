import React, { useState } from "react";
import { Button } from "@mui/material";
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
    <div className="classselect">
      <div className="classselect__container">
        <div className="tank__container">
          <Button variant="contained" onClick={handlePaladinClick}>
            Paladin
          </Button>
          <Button variant="contained" onClick={handleWarriorClick}>
            Warrior
          </Button>
          <Button variant="contained" onClick={handleDarkKnightClick}>
            Dark Knight
          </Button>
          <Button variant="contained" onClick={handleGunbreakerClick}>
            Gunbreaker
          </Button>
        </div>
        <div className="healer__container">
          <Button variant="contained" onClick={handleWhiteMageClick}>
            White Mage
          </Button>
          <Button variant="contained" onClick={handleScholarClick}>
            Scholar
          </Button>
          <Button variant="contained" onClick={handleAstrologianClick}>
            Astrologian
          </Button>
          <Button variant="contained" onClick={handleSageClick}>
            Sage
          </Button>
        </div>
        <div className="dps__container">
          <Button variant="contained" onClick={handleMonkClick}>
            Monk
          </Button>
          <Button variant="contained" onClick={handleDragoonClick}>
            Dragoon
          </Button>
          <Button variant="contained" onClick={handleNinjaClick}>
            Ninja
          </Button>
          <Button variant="contained" onClick={handleSamuraiClick}>
            Samurai
          </Button>
          <Button variant="contained" onClick={handleReaperClick}>
            Reaper
          </Button>
          <Button variant="contained" onClick={handleBardClick}>
            Bard
          </Button>
          <Button variant="contained" onClick={handleMachinistClick}>
            Machinist
          </Button>
          <Button variant="contained" onClick={handleDancerClick}>
            Dancer
          </Button>
          <Button variant="contained" onClick={handleBlackMageClick}>
            Black Mage
          </Button>
          <Button variant="contained" onClick={handleSummonerClick}>
            Summoner
          </Button>
          <Button variant="contained" onClick={handleRedMageClick}>
            Red Mage
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ClassSelect;
