import React, { useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

function AllDungeons(props) {
  const { instanceContentData, currentLevel } = props;

  const filteredInstanceContent = instanceContentData
    .filter(
      (instanceContent) =>
        instanceContent.required_level <= currentLevel &&
        instanceContent.required_level !== null
    )
    .sort((a, b) => b.required_level - a.required_level)
    .slice(0, 7);

  useEffect(() => {
    console.log(filteredInstanceContent);
  }, [filteredInstanceContent]);

  return (
    <div>
      {filteredInstanceContent.map((instanceContent) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {instanceContent.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  EXP: {instanceContent.clear_exp}
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
