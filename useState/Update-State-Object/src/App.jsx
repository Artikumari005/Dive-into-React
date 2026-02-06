import React, { useState } from "react";
import "./App.css";
import "./index.css";

// define star icons
const starFilled = "⭐";
const starEmpty = "☆";

function App() {
  const [isFavorite, setIsFavorite] = useState(false);

  function toggleStar() {
    setIsFavorite(prev => !prev);
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Star Toggle App</h1>

      <span 
        onClick={toggleStar} 
        style={{ fontSize: "50px", cursor: "pointer" }}
      >
        {isFavorite ? starFilled : starEmpty}
      </span>

      <p>{isFavorite ? "Added to favorites" : "Click the star"}</p>
    </main>
  );
}

export default App;
