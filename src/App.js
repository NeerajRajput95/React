import "./App.css";
import Expens from "./Components/Expens";

function App() {
  let data = [
    {
      LocationOfExpenditure: "alwar,rajasthan",
      itemName: "Petrol",
      price: 100,
    },
    {
      LocationOfExpenditure: "jaipur,rajasthan",
      itemName: "Groceries",
      price: 200,
    },
    {
      LocationOfExpenditure: "udaipur,rajasthan",
      itemName: "Dinner",
      price: 300,
    },
    {
      LocationOfExpenditure: "jodhpur,rajasthan",
      itemName: "Movie Tickets",
      price: 150,
    },
  ];
  return (
    <div className="App">
      <h1>Let's start</h1>
      {data.map((item, index) => (
        <Expens
          key={index}
          item={item.itemName}
          location={item.LocationOfExpenditure}
          price={item.price}
        />
      ))}
    </div>
  );
}

export default App;
