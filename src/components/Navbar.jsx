import React, { useState } from "react";

const Navbar = ({ products, search, setSearch }) => {
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchValue = search.toLowerCase().trim();

  const suggestions = products.filter((product) =>
    product.name.toLowerCase().startsWith(searchValue)
  );

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        
        <h1 className="text-2xl sm:text-3xl font-bold text-blue-600">
          BhoomDigitalPicks
        </h1>

        <div className="relative w-full sm:w-96">

          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />

          {/* Search Icon */}
          <span className="absolute left-3 top-2.5 text-gray-400">
            🔍
          </span>

          {/* Suggestion Dropdown */}
          {showSuggestions && search && (
            <div className="absolute w-full bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto z-50">

              {suggestions.length > 0 ? (
                suggestions.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => {
                      setSearch(product.name);
                      setShowSuggestions(false);
                    }}
                    className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition"
                  >
                    {product.name}
                  </div>
                ))
              ) : (
                <div className="px-4 py-2 text-gray-500">
                  No Item Found ❌
                </div>
              )}

            </div>
          )}

        </div>
      </div>
    </nav>
  );
};

export default Navbar;