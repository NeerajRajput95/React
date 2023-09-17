import React from "react";
import "./Expens.css";
function Expens() {
  return (
    <div className="ExpenesItem">
      <div className="ExpenseItems">Expense Items</div>
      <div className="item">
        <h1>Petrol </h1>
        <div className="price">Rs 100</div>
      </div>
    </div>
  );
}

export default Expens;
