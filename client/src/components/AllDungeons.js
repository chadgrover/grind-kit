import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";
import SingleDungeon from "./SingleDungeon";
import axios from "axios";

function AllDungeons(props) {
  const { instanceContentData, currentLevel } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [fetchedData, setFetchedData] = useState({});

  const filteredInstanceContent = instanceContentData
    .filter(
      (instanceContent) =>
        instanceContent.required_level <= currentLevel &&
        instanceContent.required_level !== null
    )
    .sort((a, b) => b.required_level - a.required_level)
    .slice(0, 6);

  return (
    <div>
      {isSelected === false ? (
        <>
          <Grid sx={{ m: 1 }} container spacing={2}>
            {filteredInstanceContent.map((instanceContent) => {
              return (
                <Grid item xs={3}>
                  <Card sx={{ maxWidth: 345 }}>
                    <CardActionArea
                      onClick={async () => {
                        const data = await axios.get(
                          `https://xivapi.com/InstanceContent/${instanceContent.id}`
                        );
                        setFetchedData(data.data);
                        setIsSelected(true);
                      }}
                    >
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
                </Grid>
              );
            })}
          </Grid>
        </>
      ) : (
        <>
          <SingleDungeon fetchedData={fetchedData} setIsSelected={setIsSelected}/>
        </>
      )}
    </div>
  );
}

export default AllDungeons;
