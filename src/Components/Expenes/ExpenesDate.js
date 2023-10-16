import React from "react";

const ExpenesDate = (probs) => {
  console.log("probs", probs);
  const month = probs.currentDate.date.toLocaleString("en-US", {
    month: "long",
  });
  const day = probs.currentDate.date.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = probs.currentDate.date.getFullYear();
  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenesDate;
