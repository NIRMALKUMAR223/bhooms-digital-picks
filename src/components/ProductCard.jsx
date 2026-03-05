import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-lg transition duration-300">

      <img
        src={`https://nirmalkumar223.github.io/bhooms-digital-picks/${product.image}`}
        alt={product.name}
        className="rounded-xl mb-3 w-full h-40 sm:h-52 object-cover"
      />

      <h2 className="text-sm sm:text-lg font-semibold mb-3 line-clamp-2">
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
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 sm:py-3 rounded-xl font-semibold text-sm sm:text-base transition duration-300"
      >
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;