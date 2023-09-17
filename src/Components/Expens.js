import React from "react";
import "./Expens.css";
function Expens() {
  const ExpenseItem = "Expense Items";
  const LocationOfExpenditure = "alwar,rajasthan";
  const itemName = "Petrol";
  const price = 100;
  return (
    <div className="ExpenesItem">
      <div className="ExpenseItems">{ExpenseItem}</div>
      <h3 className="">{LocationOfExpenditure}</h3>
      <div className="item">
        <h1>{itemName} </h1>
        <div className="price">Rs {price}</div>
      </div>
    </div>
  );
}

export default Expens;
