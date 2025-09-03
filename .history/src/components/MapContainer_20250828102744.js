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
    