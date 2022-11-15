import React, { useEffect } from "react";
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
    .slice(0, 7);

  useEffect(() => {
    console.log(filteredInstanceContent);
  }, [filteredInstanceContent]);

  return <p>Hey</p>;
}

export default AllDungeons;
