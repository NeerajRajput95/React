import React from "react";
import "./Expens.css";
function Expens(probs) {
  return (
    <div className="ExpenesItem">
      <div className="ExpenseItems">{probs.item}</div>
      <div className="item">
        <h3 className="">{probs.location}</h3>
        <div className="price">Rs {probs.price}</div>
      </div>
    </div>
  );
}

export default Expens;
