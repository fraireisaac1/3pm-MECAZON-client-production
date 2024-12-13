// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Groceries from "./pages/Groceries";
import Navbar from "./components/Navbar";
import SearchResults from "./pages/SearchResults";
import Footer from "./components/Footer";
import "./App.css";

// importing modal so i can preview it
import Modal from "./components/Modal";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  return (
    <>
      <Router>
        <Navbar setSearchValue={setSearchValue} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/groceries" element={<Groceries searchValue={searchValue} setSearchValue={setSearchValue} />} />
          </Routes>
          <Modal />
        <Footer />
      </Router>
    </>
  );
}
