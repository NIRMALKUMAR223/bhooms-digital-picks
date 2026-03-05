import React from "react";
import ProductCard from "./ProductCard";
import ScrollReveal from "./ScrollReveal";


const ProductList = ({ products, search }) => {
  const searchValue = search.toLowerCase().trim();

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchValue)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

      {/* 🔥 GRID FIXED HERE */}
      <div className="grid 
    grid-cols-2 
    lg:grid-cols-4 
    gap-4 lg:gap-8">

        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ScrollReveal key={product.id}>
              <ProductCard key={product.id} product={product} />
            </ScrollReveal>
          ))
        ) : (
          <div className="col-span-2 md:col-span-3 lg:col-span-4 text-center py-10 text-gray-500 text-lg">
            No Item Found ❌
          </div>
        )}

      </div>
    </div>
  );
};

export default ProductList;