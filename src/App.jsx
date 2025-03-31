import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/Register";
import OurProduct from "./components/OurProduct";
import Admine from "./components/Admine";
import ProductDes from "./components/ProductDes";
import YourOrder from "./components/YourOrder";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/register" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Register />} />
        <Route path="/ourproduct" element={<OurProduct />} />
        <Route path="/Admine" element={<Admine />} />
        <Route path="/ProductDes" element={<ProductDes />} />
        <Route path="/YourOrder" element={<YourOrder />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
