import React, { useEffect, useState } from "react";
import axios from "axios";

function AllDungeons(props) {
  const { instanceContentData, currentLevel } = props;

  const names = instanceContentData.filter(
    (instanceContent) => instanceContent.required_level < currentLevel
  );

  useEffect(() => {
    console.log(names);
  }, [names]);

  return <div>Test</div>;
}

export default AllDungeons;
