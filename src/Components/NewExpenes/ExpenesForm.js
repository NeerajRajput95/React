import React, { useState } from "react";

function ExpenesForm({ addValue }) {
  // Define state variable to store form input values as an object

  const [formData, setFormData] = useState({
    location: "",
    title: "",
    amount: "",
    date: "",
  });
  console.log("formData", formData);
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

    let prevdata = localStorage.getItem("formData");
    console.log("Previous date:", formData.date);

    let newdata = {
      LocationOfExpenditure: formData.location,
      itemName: formData.title,
      price: formData.amount,
    };
    console.log("newdata:", newdata);

    addValue(newdata);
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
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenesForm;
