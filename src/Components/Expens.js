import React from "react";
import "./Expens.css";
import ExpenesDetails from "./ExpenesDetails";
function Expens(probs) {
  return (
    <div className="Expense-item">
      <ExpenesDetails Details={probs} />
    </div>
  );
}

export default Expens;
