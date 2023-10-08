// import React, { useState } from "react";

// function ExpenesForm() {
//   // Define state variables to store input values
//   //   const [location, setlocation] = useState("");
//   //   const [title, setTitle] = useState("");
//   //   const [amount, setAmount] = useState("");
//   //   const [date, setDate] = useState("");
//   //   const LocationOfExpenditure = (event) => {
//   //     setlocation(event.target.value);
//   //   };

//   //   const titleChangeHandler = (event) => {
//   //     setTitle(event.target.value);
//   //   };

//   //   const amountChangeHandler = (event) => {
//   //     setAmount(event.target.value);
//   //   };

//   //   const dateChangeHandler = (event) => {
//   //     setDate(event.target.value);
//   //   };

//   const [formData, setFormData] = useState({
//     location: "",
//     title: "",
//     amount: "",
//     date: "",
//   });

//   const handleChange = (event) => {
//     // Update the state based on the input name
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Define a submit handler function
//   const submitHandler = (event) => {
//     event.preventDefault(); // Prevent the default form submission behavior

//     // Gather the form input values and do something with them (e.g., logging)
//     console.log("Title:", title);
//     console.log("Amount:", amount);
//     console.log("Date:", date);
//     let prevdata = localStorage.getItem("formData");
//     console.log("Previous data:", prevdata);

//     let newdata = prevdata
//       ? [
//           {
//             itemName: title,
//             price: amount,
//             date: date,
//           },
//           ...JSON.parse(prevdata),
//         ]
//       : [
//           {
//             itemName: title,
//             price: amount,
//             date: date,
//           },
//         ];
//     localStorage.setItem("formData", JSON.stringify(newdata));

//     // You can also send the data to a parent component or perform other actions here
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <div>
//         <label>Location</label>
//         <input type="text" onChange={handleChange} value={location} />
//       </div>
//       <div>
//         <label>Title</label>
//         <input type="text" onChange={handleChange} value={title} />
//       </div>
//       <div>
//         <label>Amount</label>
//         <input type="number" onChange={handleChange} value={amount} />
//       </div>
//       <div>
//         <label>Date</label>
//         <input
//           type="date"
//           min="2020-01-01"
//           max="2025-01-01"
//           onChange={handleChange}
//           value={date}
//         />
//       </div>
//       <div>
//         <button type="submit">Submit</button>
//       </div>
//     </form>
//   );
// }

// export default ExpenesForm;

import React, { useState } from "react";

function ExpenesForm() {
  // Define state variable to store form input values as an object

  const [formData, setFormData] = useState({
    location: "",
    title: "",
    amount: "",
    date: "",
  });
  console.log("formData", formData);
  let loations = formData.location;

  const inputChangeHandler = (event, name) => {
    console.log("e is", event, name);
    // Use the spread operator to maintain the existing form data and update the specific field
    setFormData((prevData) => ({
      ...prevData,
      [name]: event.target.value,
    }));
  };

  // Define a submit handler function
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather the form input values and do something with them (e.g., logging)
    console.log("Location:", formData.location);
    console.log("Title:", formData.title);
    console.log("Amount:", formData.amount);
    console.log("Date:", formData.date);

    let prevdata = localStorage.getItem("formData");
    console.log("Previous data:", prevdata);

    let newdata = prevdata
      ? [
          {
            location: formData.location,
            itemName: formData.title,
            price: formData.amount,
            date: formData.date,
          },
          ...JSON.parse(prevdata),
        ]
      : [
          {
            location: formData.location,
            itemName: formData.title,
            price: formData.amount,
            date: formData.date,
          },
        ];
    localStorage.setItem("formData", JSON.stringify(newdata));

    // You can also send the data to a parent component or perform other actions here
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Location</label>
        <input
          type="text"
          name="location"
          onChange={(e) => {
            inputChangeHandler(e, "location");
          }}
          value={formData.location}
        />
      </div>
      <div>
        <label>Title</label>
        <input
          type="text"
          name="title"
          onChange={(e) => {
            inputChangeHandler(e, "title");
          }}
          value={formData.title}
        />
      </div>
      <div>
        <label>Amount</label>
        <input
          type="number"
          name="amount"
          onChange={(e) => {
            inputChangeHandler(e, "amount");
          }}
          value={formData.amount}
        />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          name="date"
          min="2020-01-01"
          max="2025-01-01"
          onChange={(e) => {
            inputChangeHandler(e, "date");
          }}
          //   value={formData.date}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenesForm;
