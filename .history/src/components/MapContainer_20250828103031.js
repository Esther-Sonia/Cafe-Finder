import React, { useEffect } from "react";
import { GoogleMap, Marker, InfoWindow } from "@react-google-maps/api";

const containerStyle = {
    width: "100%",
    height: "400px",
};


function MapContainer ({
    mapCenter,
    setMapCenter,
    cafes,
    setCafes,
    setSelectedCafe,
    selectedCafe,
    searchType,
    minRating,

}) {
    //detect user location
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setMapCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => {
                    console.log("Geolocation permission denied or unavailable.");
                }
            );
        } else {
            console.log("Geolocation not supported by this browser.");
        }
    }, [setMapCenter]);

    const onLoadMap = (map) 
}