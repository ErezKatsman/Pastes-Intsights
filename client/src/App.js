import React, { useState } from "react";
import "./App.css";
import Pastes from "./components/Pastes";
import axios from "axios";

function App() {
  const [pastes, setPastes] = useState([]);
  axios.get("http://localhost:8080/").then((db) => setPastes(db.data));
  return (
    <div className="app">
      <h1>DARK WEB pastes scraper</h1>
      {pastes ? <Pastes pastes={pastes} /> : <h1>loading</h1>}
    </div>
  );
}

export default App;
