import React, { useState } from "react";

function Navbar({ setMapCenter }) {
  const [query, setQuery] = useState("");

  const handleSearch = async () => {
    if (!query) return;

    try {
      const apiKey = process.env.REACT_APP_OPENCAGE_KEY;
      const url = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(query)}&key=${apiKey}&no_annotations=1`;

      const res = await fetch(url);
      const data = await res.json();
      console.log("OpenCage response:", data);  // for debugging

      if (data.results && data.results.length > 0) {
        const { lat, lng } = data.results[0].geometry;
        setMapCenter({ lat, lng });
      } else {
        alert("Location not found!");
      }
    } catch (error) {
      console.error("Error geocoding with OpenCage:", error);
    }
  };

  return (
    <nav className="w-full bg-white shadow-md p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Cafe Finder</h1>
      <div className="flex items-center space-x-2">
        <input
          type="text"
          placeholder="Search location..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border rounded px-3 py-2"
        />
        <button
          onClick={handleSearch}
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600"
        >
          Search
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
