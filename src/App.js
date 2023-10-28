import { useEffect, useState } from "react";
import "./App.css";
import Expens from "./Components/Expenes/Expens";
import NewExpenes from "./Components/NewExpenes/NewExpenes";

const App = () => {
  let initialData = [
    {
      LocationOfExpenditure: "alwar,rajasthan",
      itemName: "Petrol",
      price: 100,
      date: new Date(2000, 31, 1),
    },
    {
      LocationOfExpenditure: "jaipur,rajasthan",
      itemName: "Groceries",
      price: 200,
      date: new Date(2000, 21, 1),
    },
    {
      LocationOfExpenditure: "udaipur,rajasthan",
      itemName: "Dinner",
      price: 300,
      date: new Date(2000, 21, 1),
    },
    {
      LocationOfExpenditure: "jodhpur,rajasthan",
      itemName: "Movie Tickets",
      price: 150,
      date: new Date(2000, 12, 1),
    },
  ];

  const [data, setData] = useState([...initialData]);
  const [filteredData, setFilteredData] = useState([...initialData]);

  const handleClick = (name) => {
    const updatedData = filteredData.filter((item) => item.itemName !== name);
    setFilteredData(updatedData);
  };

  const filterItems = (e) => {
    const searchTerm = e.target.value;
    const filteredItems = data.filter((item) =>
      item.itemName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredItems);
  };

  function addValue(value) {
    setData((prev) => [value, ...prev]);
    setFilteredData((prev) => [value, ...prev]);
  }

  return (
    <div className="">
      <NewExpenes addValue={addValue} />
      <input
        type="text"
        placeholder="Filter items by name"
        onChange={filterItems}
      />
      <div className="expenseBox">
        {filteredData.map((item, index) => (
          <div key={index}>
            <Expens
              item={item.itemName}
              location={item.LocationOfExpenditure}
              price={item.price}
              date={item.date}
              handleClick={handleClick}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
