import React, { useState } from "react";

function Navbar({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    const res = await fetch(
      `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
        query
      )}&key=${process.env.REACT_APP_OPENCAGE_KEY}`
    );
    const data = await res.json();
    console.log("OpenCage response:", data);

    if (data.results && data.results.length > 0) {
      const place = data.results[0];
      const { lat, lng } = place.geometry;
      const formatted = place.formatted;

      onSearch({ lat, lng, place: formatted });
    } else {
      alert("Location not found.");
    }
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Cafe Finder</h1>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search location..."
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600"
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
