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
  // totalEntries can be refered to regardelss of currently filtered state
  const [totalEntries, setTotalEntries] = useState([
    { gps: "(36.253, -5.965)" },
    { gps: "(36.25302, -5.9655)" }
  ]);

  const [count, setCount] = useState({
    swallowNests: 0,
    martinNests: 0,
    swiftNests: 0,
    pallidSwiftNests: 0,
    redrumpedSwallowNests: 0,
    destroyedNests: 0
  });

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
      setTotalEntries(response.data);
    });
  }, [visibility]);

  useEffect(() => {
    setCount({
      swallowNests: totalEntries.filter(e => e.species === "swallow").length,
      martinNests: totalEntries.filter(e => e.species === "martin").length,
      swiftNests: totalEntries.filter(e => e.species === "swift").length,
      pallidSwiftNests: totalEntries.filter(e => e.species === "pallid_swift")
        .length,
      redrumpedSwallowNests: totalEntries.filter(
        e => e.species === "red_rumped_swallow"
      ).length,
      destroyedNests: totalEntries.filter(e => e.destroyed === true).length
    });
  }, []);

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

  const Summary = () => {
    return (
      <div>
        <div>
          <span>total nests in db:</span>
          <span>{totalEntries.length}</span>
        </div>
        <div>
          <span>of which destroyed:</span>
          <span>{count.destroyedNests}</span>
        </div>
        <div>
          <span>current nests then:</span>
          <span>{totalEntries.length - count.destroyedNests}</span>
        </div>
        <div>
          <span>swallow nests:</span>
          <span>{count.swallowNests}</span>
        </div>
        <div>
          <span>swift nests:</span>
          <span>{count.swiftNests}</span>
        </div>
        <div>
          <span>martin nests:</span>
          <span>{count.martinNests}</span>
        </div>
        <div>
          <span>red rumped swallow nests:</span>
          <span>{count.redrumpedSwallowNests}</span>
        </div>
        <div>
          <span>pallid swift nests:</span>
          <span>{count.pallidSwiftNests}</span>
        </div>
      </div>
    );
  };

  const handleViewportChanged = func => {
    console.log(func);
  };

  return (
    <>
      <div className="container">
        <div className="row" style={{ padding: "1rem" }}>
          <Selector />
        </div>
        <div className="row">
          <LeafletMap
            center={[36.253, -5.965]}
            zoom={17}
            ref="map"
            onViewportChanged={() =>
              console.log(this.refs.map.LeafletElement.getBounds)
            }
          >
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
          <Summary />
        </div>
      </div>
    </>
  );
};

export default MapComponent;
