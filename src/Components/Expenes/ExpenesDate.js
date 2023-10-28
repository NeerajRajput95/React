// import React from "react";

// const ExpenesDate = (probs) => {
//   console.log("probs");
//   const month = probs.currentDate.date.toLocaleString("en-US", {
//     month: "long",
//   });
//   const day = probs.currentDate.date.toLocaleString("en-US", {
//     day: "2-digit",
//   });
//   const year = probs.currentDate.date.getFullYear();
//   return (
//     <div>
//       <div>{month}</div>
//       <div>{year}</div>
//       <div>{day}</div>
//     </div>
//   );
// };

// export default ExpenesDate;

import React from "react";

const ExpenesDate = (props) => {
  const currentDate = props.currentDate.date;

  if (!currentDate || !(currentDate instanceof Date)) {
    return <div>Error: Invalid date</div>;
  }

  const month = currentDate.toLocaleString("en-US", {
    month: "long",
  });
  const day = currentDate.toLocaleString("en-US", {
    day: "2-digit",
  });
  const year = currentDate.getFullYear();

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
};

export default ExpenesDate;
