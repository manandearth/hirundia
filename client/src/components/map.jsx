import React, { useState, useEffect } from "react";
import { getTransitData } from "../api.js";

import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Circle
} from "react-leaflet";

const gpsToArray = gps => {
  const regExp = /\(([^)]+)\)/;
  const lan = parseFloat(regExp.exec(gps)[1].split(",")[0]);
  const lon = parseFloat(regExp.exec(gps)[1].split(",")[1]);
  return [lan, lon];
};

const MapComponent = () => {
  const [entries, setEntries] = useState([
    { gps: "(36.253, -5.965)" },
    { gps: "(36.25302, -5.9655)" }
  ]);

  useEffect(() => {
    getTransitData().then(response => {
      setEntries(response.data);
    });
  }, []);

  let position = [gpsToArray(entries[0].gps)[0], gpsToArray(entries[0].gps)[1]];
  let circlePosition = [
    gpsToArray(entries[1].gps)[0],
    gpsToArray(entries[1].gps)[1]
  ];

  return (
    <LeafletMap center={[36.253, -5.965]} zoom={17}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
      />
      {entries.map(entry => (
        <Circle
          center={[gpsToArray(entry.gps)[0], gpsToArray(entry.gps)[1]]}
          fillColor={
            entry.species === "swallow"
              ? "blue"
              : entry.species === "martin"
              ? "red"
              : "green"
          }
          radius={5}
        />
      ))}
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </LeafletMap>
  );
};

export default MapComponent;
