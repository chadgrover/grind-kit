import React, { useEffect, useState } from "react";
import axios from "axios";

function AllDungeons({ instanceContentData }) {
  const level = 30;

  const names = instanceContentData.filter(
    (instanceContent) => instanceContent.required_level < level
  );

  useEffect(() => {
    console.log(names);
  }, [names]);

  return <div>Test</div>;
}

export default AllDungeons;
