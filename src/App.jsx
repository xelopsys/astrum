import "./styles/App.css";
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { Home1 } from "./pages/Home1";

import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home-2" element={<Home1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
