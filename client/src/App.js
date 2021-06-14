import React, { useState } from "react";
import "./App.css";
import Pastes from "./components/Pastes";
import axios from "axios";

function App() {
  const [pastes, setPastes] = useState([]);
  const [error, setError] = useState("");
  axios
    .get("http://localhost:8080/")
    .then((db) => setPastes(db.data))
    .catch(() => {
      setError("no items found");
    });
  return (
    <div className="app">
      <h1>DARK WEB pastes scraper</h1>
      {error && <h1>{error}</h1>}
      {pastes ? <Pastes pastes={pastes} /> : <h1>loading</h1>}
    </div>
  );
}

export default App;
