import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Brands } from "./components/brands/Brands";
import { Filter } from "./components/filterProducts/Filter";
import { Navbar } from "./components/navbar/Navbar";
import { ProductDetail } from "./components/products/ProductDetail";
import { ProductsByBrand } from "./components/products/ProductsByBrand";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/brand/:brandName" element={<ProductsByBrand />} />
        <Route path="/brands" element={<Brands />} />
      </Routes>
    </div>
  );
}

export default App;
