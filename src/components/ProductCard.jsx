import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-md hover:shadow-xl transition duration-300">

      <img
        src={`https://nirmalkumar223.github.io/bhooms-digital-picks/img/${product.image}`}
        alt={product.name}
        className="rounded-2xl mb-4 w-full h-60 object-cover"
      />

      <h2 className="text-xl font-semibold mb-4">
        {product.name}
      </h2>

      <button
        onClick={() => {
          if (product.link) {
            window.open(product.link, "_blank", "noopener,noreferrer");
          } else {
            alert("Product link not available");
          }
        }}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition duration-300"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;