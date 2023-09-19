import React from "react";
import "./ExpenseDetails.css";
function ExpenesDetails(probs) {
  return (
    <div>
      <div className="ExpenesItem">
        <div className="ExpenseItems">{probs.Details.item}</div>
        <div className="item">
          <h3 className="">{probs.Details.location}</h3>
          <div className="price">Rs {probs.Details.price}</div>
        </div>
      </div>
    </div>
  );
}

export default ExpenesDetails;
