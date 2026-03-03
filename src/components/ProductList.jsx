import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({ products, search }) => {

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().startsWith(search.toLowerCase().trim())
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

      {search && filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500 text-xl font-semibold">
          No Item Found ❌
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
};

export default ProductList;