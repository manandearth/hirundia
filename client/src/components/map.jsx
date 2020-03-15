import React, { useState, useEffect } from "react";
import { getTransitData } from "../api.js";
import dayjs from "dayjs";

import {
  Map as LeafletMap,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Tooltip
} from "react-leaflet";
const t = require("../translations/translate_es.json");
require("dayjs/locale/es");
// dayjs.locale("es");
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

  const [visibility, setVisibility] = useState("CURRENT");

  useEffect(() => {
    getTransitData().then(response => {
      let filteredData;
      switch (visibility) {
        case "TOTAL":
          filteredData = response.data;
          break;
        case "CURRENT":
          filteredData = response.data.filter(
            entry => entry.destroyed === false
          );
          break;
        case "DESTROYED":
          filteredData = response.data.filter(
            entry => entry.destroyed === true
          );
      }
      setEntries(filteredData);
    });
  }, [visibility]);

  let position = [gpsToArray(entries[0].gps)[0], gpsToArray(entries[0].gps)[1]];
  let circlePosition = [
    gpsToArray(entries[1].gps)[0],
    gpsToArray(entries[1].gps)[1]
  ];

  const handleColor = entry => {
    switch (entry.species) {
      case "swallow":
        return "crimson";
        break;
      case "swift":
        return "steelblue";
        break;
      case "martin":
        return "orange";
        break;
      case "pallid_swift":
        return "seagreen";
        break;
      case "red_rumped_swallow":
        return "brown";
        break;
      default:
    }
  };

  const handlePopup = entry => {
    return (
      <table>
        <tr>
          {" "}
          <td>
            <b>{`${t.address}: `}: </b>{" "}
            {`${entry.street} ${entry.house_number_name} `}
          </td>{" "}
        </tr>
        <tr>
          {" "}
          <td>
            <b>{`${t.height}: `}</b>
            {`${entry.height} m `}
          </td>{" "}
        </tr>
        <tr>
          <td>
            <b>{`${t.facing}: `}</b>
            {t[entry.facing]}
          </td>
        </tr>
        <tr>
          <td>
            <b>{`${t.type}: `} </b>
            {t[entry.type]}
          </td>
        </tr>
        <tr>
          <td>
            <b>{`${t.date}: `} </b>
            {dayjs(entry.date)
              .locale("es")
              .format("ddd. D MMM YYYY")}
          </td>
        </tr>
      </table>
    );
  };

  const handleTooltip = entry => {
    return (
      <table>
        <tr>
          <td>
            <b>lat/lon: </b>{" "}
            {`${gpsToArray(entry.gps)[0]} ${gpsToArray(entry.gps)[1]}`}
          </td>
        </tr>
        <tr>
          <td>
            <b>{`${t.species}: `}</b>
            {t[entry.species]}
          </td>
        </tr>
      </table>
    );
  };

  const handleToggle = state => {
    setVisibility(state);
    console.log(`state id -> ${state}`);
  };
  const Selector = () => {
    return (
      <div className="container">
        <div className="btn-group btn-group-toggle">
          <label
            className={`btn btn-${
              visibility === "TOTAL" ? "info" : "secondary"
            }`}
          >
            <input
              type="radio"
              name="options"
              id="total"
              autocomplete="off"
              checked
              onClick={() => handleToggle("TOTAL")}
            />{" "}
            Total entries
          </label>
          <label
            className={`btn btn-${
              visibility === "CURRENT" ? "info" : "secondary"
            }`}
          >
            <input
              type="radio"
              name="options"
              id="current"
              autocomplete="off"
              onClick={() => handleToggle("CURRENT")}
            />{" "}
            Currect entries
          </label>
          <label
            className={`btn btn-${
              visibility === "DESTROYED" ? "info" : "secondary"
            }`}
          >
            <input
              type="radio"
              name="options"
              id="destroyed"
              autocomplete="off"
              onClick={() => handleToggle("DESTROYED")}
            />{" "}
            Destroyed entries
          </label>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{ padding: "1rem" }}>
          <Selector />
        </div>
        <div className="row">
          <LeafletMap center={[36.253, -5.965]} zoom={17}>
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
            />
            {entries.map(entry => (
              <Circle
                center={[gpsToArray(entry.gps)[0], gpsToArray(entry.gps)[1]]}
                fillColor={handleColor(entry)}
                color={handleColor(entry)}
                radius={5}
              >
                <Popup>{handlePopup(entry)}</Popup>
                <Tooltip>{handleTooltip(entry)}</Tooltip>
              </Circle>
            ))}
          </LeafletMap>
        </div>
      </div>
    </>
  );
};

export default MapComponent;
