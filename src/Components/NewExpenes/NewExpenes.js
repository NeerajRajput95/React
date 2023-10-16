import React from "react";
import ExpenesForm from "./ExpenesForm";
import "./NewExpenes.css";

function NewExpenes({ addValue }) {
  console.log("setvalue in ex", addValue);
  return (
    <div>
      <ExpenesForm addValue={addValue} />
    </div>
  );
}

export default NewExpenes;
