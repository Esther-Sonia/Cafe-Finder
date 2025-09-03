import React, { usesTate } from "react";
import { useJsApiLoader } from "@react-google-maps/api";
import Sidebar from "./components/Sidebar";
import MapContainer from "./components/MapContainer";

const libraries = ["places"];

function App() {
  const { isLoaded } = useJsApiLoader ({
    googleMapsApiKey: "YOUR_API_KEY",
    libraries
  });

  const [mapCenter, setMapCenter] = useState({
    lat: -1.28,
    lng: 0,
  });

}