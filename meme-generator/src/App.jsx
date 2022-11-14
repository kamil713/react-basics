import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Meme from "./components/Meme";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Meme />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
