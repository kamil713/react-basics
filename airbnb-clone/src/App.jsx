import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import cardsData from "./data";
import "./App.css";

function App() {
  const cardElements = cardsData.map((card) => {
    return (
      <Card
        key={card.id}
        {...card}
      />
    );
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <section className="cards-list">{cardElements}</section>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
