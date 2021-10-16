import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Brands } from "./components/brands/Brands";
import { Men } from "./components/men/Men";
import { Navbar } from "./components/navbar/Navbar";
import { ProductDetail } from "./components/products/ProductDetail";
import { ProductsByBrand } from "./components/products/ProductsByBrand";
import { Women } from "./components/women/Women";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductDetail />} />
        <Route path="/brand/:brandName" element={<ProductsByBrand />} />
        <Route path="/brands" element={<Brands />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
      </Routes>
    </div>
  );
}

export default App;
