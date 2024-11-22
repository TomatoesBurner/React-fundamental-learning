import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    //in JSX, do not use `class` ,but instead `className`
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// One component for header
function Header() {
  //   const headerstyle = {
  //     color: "red",
  //     fontSiz: "48px",
  //     textTransform: "uppercase",
  //   };
  const style = {};

  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

// One component for Menu
function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <div>
        {pizzaData.map((pizza) => (
          <Pizza pizzaObj={pizza} />
        ))}
      </div>
      {}
      <Pizza />
    </main>
  );
}
// props
function Pizza(props) {
  return (
    <div className="pizza">
      <img src={props.pizzaObj.photoName} alt="Pizza spinaci" />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>Tomato, mozarella, spinach, and ricotta cheese</p>
        <span></span>
      </div>
    </div>
  );
}

// One component for footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  //   if (hour >= openHour && hour <= closeHour) alert("We're currentl open!");
  //   else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {new Date().toLocaleDateString()}.We're currently opening
    </footer>
  );
  // return React.createElement("footer", null, "We're currently opening");
}

// React V18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<React.StrictMode> is a special wrapper component provided
  //by React that helps developers identify potential problems
  //in their applications.
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before 18
//ReactDOM.render(<App />, document.getElementById("root"))
