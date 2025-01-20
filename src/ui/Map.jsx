// filepath: /c:/Users/ahmad/Documents/portifolio/src/ui/Map.jsx
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [10.609319, 7.429504]; // Coordinates for Kaduna State, Nigeria
  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "275px", width: "100%" }}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Kaduna State, Nigeria</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
