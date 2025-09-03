import React, { useState } from "react";

const MapContainer = () => {
  const [results, setResults] = useState([]);

  const apiKey = process.env.REACT_APP_OPENCAGE_KEY;

  // Example: search cafes in Nairobi
  const searchCafes = async () => {
    try {
      const response = await fetch(
        `https://api.opencagedata.com/geocode/v1/json?q=cafe+nairobi&key=${apiKey}`
      );
      const data = await response.json();
      console.log("OpenCage response:", data);
      setResults(data.results);
    } catch (error) {
      console.error("Error fetching cafes:", error);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={searchCafes}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Search Cafes
      </button>

      <ul className="mt-4">
        {results.map((place, index) => (
          <li key={index} className="border-b py-2">
            {place.formatted}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapContainer;
