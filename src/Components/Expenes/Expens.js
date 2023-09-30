import React from "react";
import "./Expens.css";
import ExpenesDetails from "./ExpenesDetails";
import Card from "../UI/Card";

const Expens = (props) => {
  return (
    <Card className="Expense-item">
      <ExpenesDetails Details={props} />
    </Card>
  );
};

export default Expens;
