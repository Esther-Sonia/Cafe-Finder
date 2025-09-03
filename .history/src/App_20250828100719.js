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
    lat: -1.286389,
    lng: 36.817223,
  });

  const [cafes, setCafes] = useState([]);
  const [selectedCafe, setSelectedCafe] = useState(null);
  const [searchType, setSearchType] = useState("cafe");
  const [minRating, setMinRating] = useState(0);

  if (!isLoaded)  return <p className = "text-center mt-10">Loading map...</p>

  return (
    <div className ="flex h-screen">
      <Sidebar
        cafes={cafes}
        selectedCafe={selectedCafe}
        setSelectedCafe={setSelectedCafe}
        searchType={searchType}
        setSearchType={setSearchType}
        minRating={minRating}
        setMinRating={setMinRating}
      />
      <MapContainer
        mapCenter={mapCenter}
        setMapCenter={setMapCenter}
        cafes={cafes}
        selectedCafe={selectedCafe}
      />
    </div>
  )

}