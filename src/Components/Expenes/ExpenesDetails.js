import React from "react";
import "./ExpenseDetails.css";
import ExpenesDate from "./ExpenesDate";
const ExpenesDetails = (props) => {
  const handleClick = () => {
    props.Details.handleClick(props.Details.item); // Pass the itemName to handleClick
  };
  console.log(props, "ddddddd");
  return (
    <div>
      <div className="ExpenesItem">
        <ExpenesDate currentDate={props.Details} />
        <div className="ExpenseItems">{props.Details.item}</div>
        <div className="item">
          <h3 className="">{props.Details.location}</h3>
          <div className="price">Rs {props.Details.price}</div>
          <button onClick={handleClick}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenesDetails;
