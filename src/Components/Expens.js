import React from "react";
import "./Expens.css";
import ExpenesDetails from "./ExpenesDetails";
import Card from "./Card";

function Expens(probs) {
  return (
    <Card className="Expense-item">
      <ExpenesDetails Details={probs} />
    </Card>
  );
}

export default Expens;
