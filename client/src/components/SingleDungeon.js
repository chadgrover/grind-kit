import React from "react";
import { Button, Card, CardContent, CardMedia, CardActions, Typography } from "@mui/material";
import "../styles/SingleDungeon.css"

function SingleDungeon({ fetchedData, setIsSelected }) {
  return (
    <div className= "singledungeon__container">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          src={`https://xivapi.com${fetchedData.Banner}`}
          alt="Banner"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {fetchedData.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          </Typography>
          <Typography variant="body3" color="text.secondary">
            {fetchedData.Description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default SingleDungeon;
