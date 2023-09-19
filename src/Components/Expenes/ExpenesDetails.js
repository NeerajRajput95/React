import React from "react";
import "./ExpenseDetails.css";
import ExpenesDate from "./ExpenesDate";
const ExpenesDetails = (probs) => {
  return (
    <div>
      <div className="ExpenesItem">
        <ExpenesDate currentDate={probs.Details} />
        <div className="ExpenseItems">{probs.Details.item}</div>
        <div className="item">
          <h3 className="">{probs.Details.location}</h3>
          <div className="price">Rs {probs.Details.price}</div>
        </div>
      </div>
    </div>
  );
};

export default ExpenesDetails;
