import React from "react";

function ExpenesForm() {
  const titleChangeHandler = (event) => {
    console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
  };
  const dateChangeHandler = (event) => {
    console.log(event.target.value);
  };
  return (
    <form>
      <div>
        <label>Title</label>
        <input type="text" onChange={titleChangeHandler} />
      </div>
      <div>
        <label>Amount</label>
        <input type="number" onChange={amountChangeHandler} />
      </div>
      <div>
        <label>Date</label>
        <input
          type="date"
          min="2020-01-01"
          max="2025-01-01"
          onChange={dateChangeHandler}
        />
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default ExpenesForm;
