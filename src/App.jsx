import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import products from "./data/products";
import "./App.css";


function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <Navbar
        products={products}
        search={search}
        setSearch={setSearch}
      />
      <ProductList products={products} search={search} />

      <footer className="bg-white text-center py-6 text-gray-500 text-sm border-t">
        © 2026 BhoomDigitalPicks. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;