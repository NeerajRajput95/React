import React, { useEffect, useState } from "react";
import "./ExpenseDetails.css";
import ExpenesDate from "./ExpenesDate";
const ExpenesDetails = (props) => {
  console.log("props", props);
  const [title, setTitle] = useState(props.Details.item);
  console.log(title, "title");
  const handleClick = () => {
    props.Details.handleClick(props.Details.item); // Pass the itemName to handleClick
  };
  const handlechange = () => {
    setTitle("new name");
  };
  useEffect(() => {
    setTitle(props.Details.item);
  }, [props]);
  console.log(props, "ddddddd");
  return (
    <div>
      <div className="ExpenesItem">
        <div className="ExpenseItems">{title}</div>
        <div className="item">
          <h3 className="">{props.Details.location}</h3>
          <div className="price">{props.Details.price}</div>
          <button onClick={handleClick}>Delete</button>
          <button onClick={handlechange}>change title</button>
        </div>
      </div>
    </div>
  );
};

export default ExpenesDetails;
