import React, { useEffect, useState } from "react";
import AllDungeons from "./AllDungeons";
import ClassSelect from "./ClassSelect";

function Session({inputRef}) {
  const [classSelected, setClassSelected] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [instanceContentData, setInstanceContentData] = useState([]);

  return (
    <div>
      {classSelected === true ? (
        <>
          <AllDungeons instanceContentData={instanceContentData} currentLevel={currentLevel}/>
        </>
      ) : (
        <>
          <ClassSelect setClassSelected={setClassSelected} setInstanceContentData={setInstanceContentData} inputRef={inputRef} setCurrentLevel={setCurrentLevel}/>
        </>
      )}
    </div>
  );
}

export default Session;
