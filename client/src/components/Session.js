import React, { useEffect, useState } from "react";
import AllDungeons from "./AllDungeons";
import ClassSelect from "./ClassSelect";

function Session() {
  const [classSelected, setClassSelected] = useState(false);
  const [instanceContentData, setInstanceContentData] = useState([]);

  return (
    <div>
      {classSelected === true ? (
        <>
          <AllDungeons instanceContentData={instanceContentData} />
        </>
      ) : (
        <>
          <ClassSelect setClassSelected={setClassSelected} setInstanceContentData={setInstanceContentData} />
        </>
      )}
    </div>
  );
}

export default Session;
