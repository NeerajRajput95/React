import { useEffect, useState } from "react";
import "./App.css";
import Expens from "./Components/Expenes/Expens";
import NewExpenes from "./Components/NewExpenes/NewExpenes";

const App = () => {
  let data = [
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
  useEffect(() => {
    let formData = localStorage.getItem("formData")
      ? JSON.parse(localStorage.getItem("formData"))
      : [];
    console.log("formData", formData);
    data.push(...formData);
  }, [localStorage.getItem("formData")]);
  const [value, setvalue] = useState([...data]);

  const handleClick = (name) => {
    console.log("nnnnn", name);
    const filteredData = value.filter((data) => data.itemName !== name);
    console.log("rrrrrrrrrrrrrrrr", filteredData);
    setvalue(filteredData);
    console.log("vvvvvvvv", value);
  };

  return (
    <div className="">
      <NewExpenes />
      {console.log("bbbbbbbbbbbb", value)}
      {value.map((item, index) => (
        <div className="">
          <Expens
            key={index}
            item={item.itemName}
            location={item.LocationOfExpenditure}
            price={item.price}
            date={item.date}
            handleClick={handleClick}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
