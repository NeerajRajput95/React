import React, { useState } from "react";
import "./ExpenseDetails.css";
import ExpenesDate from "./ExpenesDate";
const ExpenesDetails = (props) => {
  const [title, setTitle] = useState(props.Details.item);
  // const handleClick = () => {
  //   props.Details.handleClick(title); // Pass the itemName to handleClick
  // };
  const handlechange = () => {
    setTitle("updated");
  };
  console.log(props, "ddddddd");
  return (
    <div>
      <div className="ExpenesItem">
        <ExpenesDate currentDate={props.Details} />
        {console.log("xxxxxxx", title)}
        <div className="ExpenseItems">{title}</div>
        <div className="item">
          <h3 className="">{props.Details.location}</h3>
          <div className="price">Rs {props.Details.price}</div>
          {/* <button onClick={handleClick}>Delete</button> */}
          <button onClick={handlechange}>change title</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenesDetails;
