import React, { useState } from "react";

const Navbar = ({ products, search, setSearch }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchValue = search.toLowerCase().trim();

  const suggestions = searchValue
    ? products.filter((product) =>
        product.name.toLowerCase().startsWith(searchValue)
      )
    : [];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-xl sm:text-2xl font-bold text-blue-600 transition-all duration-300">
          BhoomDigitalPicks
        </h1>

        {/* Desktop Search */}
        <div className="hidden md:block relative w-96">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
          />
          {/* INDUSTRY STANDARD: Scalable, accessible search icon */}
          <span className="absolute left-3 top-2.5 text-gray-400 transition-all duration-300">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 16 16" 
              aria-hidden="true"
              className="w-5 h-5"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </span>

          {/* Desktop Suggestions */}
          <div
            className={`absolute w-full bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto z-50 transform transition-all duration-300 ease-in-out ${
              showSuggestions && suggestions.length > 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            {suggestions.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  setSearch(product.name);
                  setShowSuggestions(false);
                }}
                className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-all duration-200"
              >
                {product.name}
              </div>
            ))}
          </div>

          {/* No Item Found */}
          <div
            className={`absolute w-full bg-white shadow-lg rounded-xl mt-2 p-3 text-gray-500 transform transition-all duration-300 ease-in-out ${
              showSuggestions && search && suggestions.length === 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
          >
            No Item Found ❌
          </div>
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-gray-600 transition-transform duration-300 hover:scale-110 focus:outline-none"
            aria-label="Open search"
          >
            {/* INDUSTRY STANDARD: Scalable, accessible search icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 16 16" 
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Search Section */}
      <div
        className={`md:hidden px-4 pb-4 relative overflow-hidden transition-all duration-500 ease-in-out ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-center gap-3 pt-2">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all duration-300"
          />

          <button
            onClick={() => {
              setMobileOpen(false);
              setSearch("");
            }}
            className="text-gray-500 hover:text-red-500 transition-all duration-300 hover:rotate-90 focus:outline-none p-1"
            aria-label="Close search"
          >
            {/* INDUSTRY STANDARD: Scalable, accessible close icon */}
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              fill="currentColor" 
              viewBox="0 0 16 16" 
              aria-hidden="true"
              className="w-6 h-6"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
            </svg>
          </button>
        </div>

        {/* Mobile Suggestions */}
        <div
          className={`absolute left-4 right-4 bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto z-50 transform transition-all duration-300 ease-in-out ${
            showSuggestions && search && suggestions.length > 0
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          {suggestions.map((product) => (
            <div
              key={product.id}
              onClick={() => {
                setSearch(product.name);
                setMobileOpen(false);
                setShowSuggestions(false);
              }}
              className="px-4 py-2 hover:bg-blue-50 cursor-pointer transition-all duration-200"
            >
              {product.name}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;