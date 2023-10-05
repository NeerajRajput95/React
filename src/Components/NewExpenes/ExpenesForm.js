import React, { useState } from "react";

function ExpenesForm() {
  // Define state variables to store input values
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  // Define a submit handler function
  const submitHandler = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // Gather the form input values and do something with them (e.g., logging)
    console.log("Title:", title);
    console.log("Amount:", amount);
    console.log("Date:", date);
    let prevdata = localStorage.getItem("formData");
    console.log("Previous data:", prevdata);

    let newdata = prevdata
      ? [
          {
            itemName: title,
            price: amount,
            date: date,
          },
          ...JSON.parse(prevdata),
        ]
      : [
          {
            itemName: title,
            price: amount,
            date: date,
          },
        ];
    localStorage.setItem("formData", JSON.stringify(newdata));

    // You can also send the data to a parent component or perform other actions here
  };

  return (
    <form onSubmit={submitHandler}>
      <div>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} value={title} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler} value={amount} />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2025-01-01"
          onChange={dateChangeHandler}
          value={date}
        />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default ExpenesForm;
