import React, { useState } from "react";

function Navbar() {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return alert("Enter a location first!");

    const apiKey = process.env.REACT_APP_OPENCAGE_KEY;
    console.log("API Key:", apiKey); // 👀 Debug: should not be undefined

    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          query
        )}&key=${apiKey}`
      );
      const data = await response.json();
      console.log("OpenCage response:", data);

      if (data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        alert(`Found: ${query} → lat: ${lat}, lng: ${lng}`);
      } else {
        alert("Location not found.");
      }
    } catch (err) {
      console.error("Error fetching location:", err);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800">Cafe Finder</h1>

      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
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
