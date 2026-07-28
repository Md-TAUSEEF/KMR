import { BrowserRouter, Routes, Route } from "react-router-dom";

// Navbar
import Navbar from "./components/Navbar/Navbar";

// Pages
import Home from "./components/home/Home";

// Product Pages
import Products from "./components/home/product/Products";
import ProductDetails from "./components/home/product/ProductDetails";

// Industry Pages
import Applications from "./components/Industry/Applications";
import IndustryDetails from "./components/Industry/IndustryDetails";
import WorkDetails from "./components/Industry/WorkDetails";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route path="/products" element={<Products />} />
        <Route path="/products/:categorySlug" element={<Products />} />
        <Route
          path="/products/:categorySlug/:productSlug"
          element={<ProductDetails />}
        />

        {/* Applications */}
        <Route path="/applications" element={<Applications />} />
        <Route
          path="/applications/:industrySlug"
          element={<IndustryDetails />}
        />
        <Route
          path="/applications/:industrySlug/:workSlug"
          element={<WorkDetails />}
        />

        {/* 404 Page */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;