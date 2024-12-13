// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Groceries from "./pages/Groceries";
import Navbar from "./components/Navbar";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";
export default function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/groceries" element={<Groceries />} />
          </Routes>
        <Footer />
      </Router>
    </>
  );
}
