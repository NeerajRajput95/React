import React, { useState } from "react";
import "./ExpenseDetails.css";
import ExpenesDate from "./ExpenesDate";
const ExpenesDetails = (props) => {
  const [title, setTitle] = useState(props.Details.price);
  // const handleClick = () => {
  //   props.Details.handleClick(title); // Pass the itemName to handleClick
  // };
  const handlechange = () => {
    setTitle("100$");
  };
  console.log(props, "ddddddd");
  return (
    <div>
      <div className="ExpenesItem">
        <ExpenesDate currentDate={props.Details} />
        {console.log("xxxxxxx", title)}
        <div className="ExpenseItems">{props.Details.item}</div>
        <div className="item">
          <h3 className="">{props.Details.location}</h3>
          <div className="price">{title}</div>
          {/* <button onClick={handleClick}>Delete</button> */}
          <button onClick={handlechange}>change title</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenesDetails;
