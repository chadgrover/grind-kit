import React, { useEffect, useState } from "react";
import ClassSelect from "./ClassSelect";

function Session() {
  const [classSelected, setClassSelected] = useState(false);

  return (
    <div>
      {classSelected === true ? (
        <p>Dungeon info goes here</p>
      ) : (
        <>
          <ClassSelect setClassSelected={setClassSelected} />
        </>
      )}
    </div>
  );
}

export default Session;
