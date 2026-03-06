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
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-xl 
                       focus:ring-2 focus:ring-blue-400 focus:outline-none
                       transition-all duration-300"
          />
          <span className="absolute left-3 top-2.5 text-gray-400 transition-all duration-300">
            <svg class="w-4 h-4 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z" /></svg>
          </span>

          {/* Desktop Suggestions with Animation */}
          <div
            className={`absolute w-full bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto z-50
            transform transition-all duration-300 ease-in-out
            ${showSuggestions && suggestions.length > 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"}`}
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
            className={`absolute w-full bg-white shadow-lg rounded-xl mt-2 p-3 text-gray-500
            transform transition-all duration-300 ease-in-out
            ${showSuggestions && search && suggestions.length === 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-2 pointer-events-none"}`}
          >
            No Item Found ❌
          </div>
        </div>

        {/* Mobile Search Icon */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(true)}
            className="text-2xl transition-transform duration-300 hover:scale-110"
          >
            🔍
          </button>
        </div>
      </div>

      {/* Mobile Search Section with Slide Animation */}
      <div
        className={`md:hidden px-4 pb-4 relative overflow-hidden
        transition-all duration-500 ease-in-out
        ${mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex items-center gap-2 pt-2">
          <input
            autoFocus
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowSuggestions(true);
            }}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
            placeholder="Search products..."
            className="w-full px-4 py-2 border border-gray-300 rounded-xl
                       focus:ring-2 focus:ring-blue-400 focus:outline-none
                       transition-all duration-300"
          />

          <button
            onClick={() => {
              setMobileOpen(false);
              setSearch("");
            }}
            className="text-xl transition-transform duration-300 hover:rotate-90"
          >
            ❌
          </button>
        </div>

        {/* Mobile Suggestions with Animation */}
        <div
          className={`absolute left-4 right-4 bg-white shadow-lg rounded-xl mt-2 max-h-60 overflow-y-auto z-50
          transform transition-all duration-300 ease-in-out
          ${showSuggestions && search && suggestions.length > 0
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-2 pointer-events-none"}`}
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