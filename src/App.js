import logo from "./logo.svg";
import React, { useState, useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <div>
      <ScrollToTop
        smooth
        top={300}
        style={{
          backgroundColor: "rgb(0, 176, 240)",
          color: "white",
          borderRadius: "3px",
          fontSize: "24px",
          width: "42px",
          height: "42px",
          bottom: "30px",
          right: "30px",
          boxShadow: "none",
          zIndex: 1000,
        }}
        component={<i className="fa-solid fa-angle-up"></i>}
      />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
