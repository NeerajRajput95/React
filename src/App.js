import "./App.css";
import Expens from "./Components/Expenes/Expens";

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
  return (
    <div className="">
      <h1>Let's start</h1>
      {data.map((item, index) => (
        <div className="">
          <Expens
            key={index}
            item={item.itemName}
            location={item.LocationOfExpenditure}
            price={item.price}
            date={item.date}
          />
        </div>
      ))}
    </div>
  );
};

export default App;
