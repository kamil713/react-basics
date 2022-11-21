import { useState } from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./components/Navbar.jsx";
import Main from "./components/Main.jsx";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="container">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={() => {
          setDarkMode((prevMode) => !prevMode);
        }}
      />
      <Main darkMode={darkMode} />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
