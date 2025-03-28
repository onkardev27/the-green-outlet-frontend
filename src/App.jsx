import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import OurProduct from "./components/OurProduct";
import Admine from "./components/Admine";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Register />} />
        <Route path="/ourproduct" element={<OurProduct />} />
        <Route path="/Admine" element={<Admine />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
