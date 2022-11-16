import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import axios from "axios";

function AllDungeons(props) {
  const { instanceContentData, currentLevel } = props;

  const filteredInstanceContent = instanceContentData
    .filter(
      (instanceContent) =>
        instanceContent.required_level <= currentLevel &&
        instanceContent.required_level !== null
    )
    .sort((a, b) => b.required_level - a.required_level)
    .slice(0, 6);

  // const handleBannerFetch = async () => {
  //   for (const instanceContent of filteredInstanceContent) {
  //     const extendedInformation = await axios.get(
  //       `https://xivapi.com${instanceContent["url"]}`
  //     );
  //     setBannersArray(bannersArray => [...bannersArray, extendedInformation.data["Banner"]]);
  //   }
  // };

  // useEffect(() => {
  //   handleBannerFetch();
  // }, []);

  // useEffect(() => {
  //   console.log(bannersArray);
  // }, [bannersArray]);

  return (
    <div>
      {filteredInstanceContent.map((instanceContent) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {instanceContent.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Required Level: {instanceContent.required_level}
                </Typography>
                <Typography variant="body3" color="text.secondary">
                  {instanceContent.clear_exp} EXP upon completion
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        );
      })}
    </div>
  );
}

export default AllDungeons;
