import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import "./App.css"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Main />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <App />
)
