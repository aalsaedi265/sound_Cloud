
import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./HomePage.jsx";

function App() {
  return (
    <div>
      <HomePage />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(<App />);
