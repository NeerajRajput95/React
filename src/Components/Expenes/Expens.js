import React from "react";
import "./Expens.css";
import ExpenesDetails from "./ExpenesDetails";
import Card from "../UI/Card";

const Expens = (probs) => {
  return (
    <Card className="Expense-item">
      <ExpenesDetails Details={probs} />
    </Card>
  );
};

export default Expens;
