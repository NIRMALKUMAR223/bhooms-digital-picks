import React from "react";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const percentage = (rating / 5) * 100;

    return (
      <div className="relative inline-block leading-none">
        {/* Empty Stars */}
        <div className="flex text-gray-300 text-sm sm:text-base">
          {[...Array(5)].map((_, i) => (
            <span key={i} className="mr-0.5">★</span>
          ))}
        </div>

        {/* Filled Stars */}
        <div
          className="flex text-yellow-500 absolute top-0 left-0 overflow-hidden text-sm sm:text-base"
          style={{ width: `${percentage}%` }}
        >
          {[...Array(5)].map((_, i) => (
            <span key={i} className="mr-0.5">★</span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white rounded-2xl p-3 sm:p-4 shadow-md hover:shadow-lg transition duration-300 flex flex-col h-full">

      {/* Image */}
      <img
        src={`https://nirmalkumar223.github.io/bhooms-digital-picks${product.image}`}
        alt={product.name}
        className="rounded-xl mb-3 w-full h-36 sm:h-44 object-cover"
      />

      {/* Title */}
      <h2 className="text-sm sm:text-base font-semibold line-clamp-2 min-h-[40px]">
        {product.name}
      </h2>

      {/* ⭐ Stars Only */}
      {product.rating && (
        <div className="mt-2">
          {renderStars(product.rating)}
        </div>
      )}

      {/* Button */}
      <div className="mt-auto pt-3">
        <button
          onClick={() => {
            if (product.link) {
              window.open(product.link, "_blank", "noopener,noreferrer");
            } else {
              alert("Product link not available");
            }
          }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-xs sm:text-sm font-semibold transition duration-300"
        >
          Buy Now
        </button>
      </div>

    </div>
  );
};

export default ProductCard;