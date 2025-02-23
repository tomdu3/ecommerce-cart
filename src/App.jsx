import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
}

export default App;
