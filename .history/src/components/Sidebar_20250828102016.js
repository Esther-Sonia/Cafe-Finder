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
            placeholder="Search (cafe, bakery, restaurant...)"
            className="border border-gray-300 p-2 mb-4 w-full"
            />
            {/* Rating filter */}
            <select
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="border border-gray-300 p-2 mb-4 w-full"
            >
                <option value={0}>All Ratings</option>
                <option value={1}>1 Star & Up</option>
                <option value={2}>2 Stars & Up</option>
                <option value={3}>3 Stars & Up</option>
                <option value={4}>4 Stars & Up</option>
                <option value={5}>5 Stars</option>
            </select>

            {/* Cafe List */}
            <div classNmae="space-y-3">
                {cafes.length > 0 ?}

        </div>
    )
}