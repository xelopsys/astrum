import "./styles/App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { HomeOne } from "./pages/HomeOne";

import Header from "./components/Header";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<HomeOne />} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
  );
}

export default App;
