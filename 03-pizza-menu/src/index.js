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
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className="pizzas">
          {pizzas.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      ) : (
        <p>We're still working on our menu. Please come back later ：）</p>
      )}
    </main>
  );
}
// props
function Pizza(props) {
  console.log(props);
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price + 3}</span>
      </div>
    </li>
  );
}

// One component for footer
function Footer() {
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 21;
  const isOpen = hour >= openHour && hour <= closeHour;

  //   if (hour >= openHour && hour <= closeHour) alert("We're currentl open!");
  //   else alert("Sorry we're closed");
  return (
    <footer className="footer">
      {/*Conditional Rendering With Ternaries  */}
      {isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Com visit us or order online</p>
          <button className="btn">order</button>
        </div>
      ) : (
        <p>
          we're happy to welcome you between {openHour}:00 and {closeHour}:00
        </p>
      )}
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
