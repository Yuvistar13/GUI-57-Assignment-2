// Importing necessary modules and resources
import React from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { MapContainer, Popup, Marker, TileLayer } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import backButton from "../backButton.png"; // Importing back button image
import "../styles/info.css"; // Importing CSS styles

// BeachMap component
const BeachMap = ({ weather }) => {
  // Extracting latitude and longitude from weather data
  const position = [weather.coord.lat, weather.coord.lon];
  console.log(weather); // Logging weather data to console

  // Rendering JSX
  return (
    <div
      className={
        typeof weather.main != "undefined" ? "screen no-background" : "" // Conditional class based on weather data
      }
    >
      <div className="main">
        <div className="notch"></div>

        {/* Creating MapContainer for displaying map */}
        <MapContainer
          center={position} // Setting center of the map
          zoom={13} // Setting zoom level
          scrollWheelZoom={false} // Disabling scroll wheel zoom
          style={{ height: "100%", width: "100%" }}
        >
          <div id="map"></div>

          {/* Adding TileLayer for map */}
          <TileLayer
            attribution=' <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Adding Marker to the map */}
          <Marker
            position={position} // Setting position of the marker
            icon={
              new Icon({
                iconUrl: markerIconPng, // Setting icon URL
                iconSize: [25, 41], // Setting icon size
                iconAnchor: [12, 41], // Setting icon anchor
              })
            }
          >
            {/* Adding Popup to the marker */}
            <Link to="/">
              {/* Adding link to the home page */}
              <button type="button" id="refreshButton" style={{backgroundImage: "url(../backButton.png)"}}>Back</button>{" "}
              {/* Adding back button with image */}
            </Link>
            <Popup>
              {/* Adding popup content */}
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default BeachMap; // Exporting BeachMap component
