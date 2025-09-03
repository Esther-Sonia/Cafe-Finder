import React from "react";

function Sidebar ({
    cafes,
    searchType,
    setSearchType,
    minRating,
    setMinRating,
    setSelectedCafe,
}) {
    return (
        <div className="w-1/3 md:w-1/4 bg-gray-100 p-4 overflow-y-auto shadow-lg">
            <h2 className="text-lg font-bold mb-4">Cafe Finder</h2>

            {/* Search Type */}
            <input 
            type="text"
            value={searchType}
            onChange={(e) => setSearchType(e.target.value)}
            placeholder="Search (cafe, bakery)..."
            className="border border-gray-300 p-2 mb-4 w-full"
            />

        </div>
    )
}