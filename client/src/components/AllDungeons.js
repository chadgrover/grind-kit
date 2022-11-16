import React from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  Typography,
  Grid,
} from "@mui/material";

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
      <Grid sx={{ m: 1 }} container spacing={2}>
        {filteredInstanceContent.map((instanceContent) => {
          return (
            <Grid item xs={3}>
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
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default AllDungeons;
