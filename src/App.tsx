import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./Components/Header/Header";
import Banner from "./Components/Banner/Banner";
function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
    </div>
  );
}

export default App;
