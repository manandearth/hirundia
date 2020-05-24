import React, { useState, useEffect, Component } from "react";
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

class MapComponent extends Component {
  state = {
    entries: [{ gps: "(36.253, -5.965)" }, { gps: "(36.25302, -5.9655)" }],
    totalEntries:
      // totalEntries can be refered to regardelss of currently filtered state
      [{ gps: "(36.253, -5.965)" }, { gps: "(36.25302, -5.9655)" }],
    // entriesInFrame filtered by the viewPort
    entriesInFrame: [
      { gps: "(36.253, -5.965)" },
      { gps: "(36.25302, -5.9655)" }
    ],
    count: {
      swallowNests: 0,
      martinNests: 0,
      swiftNests: 0,
      pallidSwiftNests: 0,
      redrumpedSwallowNests: 0,
      destroyedNests: 0
    },
    visibility: "CURRENT",
    bounds: { southWest: {}, northEast: {} },
    toggled: false
  };

  handleGetData = () =>
    getTransitData().then(response => {
      this.setState({ ...this.state, totalEntries: response.data });
      let filteredData;
      switch (this.state.visibility) {
        case "TOTAL":
          filteredData = this.state.totalEntries;
          break;
        case "CURRENT":
          filteredData = this.state.totalEntries.filter(
            entry => entry.destroyed === false
          );
          break;
        case "DESTROYED":
          filteredData = this.state.totalEntries.filter(
            entry => entry.destroyed === true
          );
      }
      this.setState({
        ...this.state,
        entries: filteredData
      });
    });

  componentDidMount() {
    this.handleGetData();
  }

  componentDidUpdate() {
    if (this.state.toggled) {
      this.handleGetData();
      this.setState({ ...this.state, toggled: false });
    }
  }

  position = [
    gpsToArray(this.state.entries[0].gps)[0],
    gpsToArray(this.state.entries[0].gps)[1]
  ];
  circlePosition = [
    gpsToArray(this.state.entries[1].gps)[0],
    gpsToArray(this.state.entries[1].gps)[1]
  ];

  handleColor = entry => {
    switch (entry.species) {
      case "swallow":
        return "#cc0000";
        break;
      case "swift":
        return "#3300ff";
        break;
      case "martin":
        return "#ffcc33";
        break;
      case "pallid_swift":
        return "#669999";
        break;
      case "red_rumped_swallow":
        return "#FF759C";
        break;
      default:
    }
  };

  handlePopup = entry => {
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

  handleTooltip = entry => {
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

  handleToggle = s => {
    this.setState({ ...this.state, visibility: s, toggled: true });
    console.log(`state id -> ${s}`);
  };

  Selector = () => {
    return (
      <div className="container">
        <div className="btn-group btn-group-toggle">
          <label
            className={`btn btn-${
              this.state.visibility === "TOTAL" ? "info" : "secondary"
            }`}
          >
            <input
              type="radio"
              name="options"
              id="total"
              autocomplete="off"
              checked
              onClick={() => this.handleToggle("TOTAL")}
            />{" "}
            {t.totalNests}
          </label>
          <label
            className={`btn btn-${
              this.state.visibility === "CURRENT" ? "info" : "secondary"
            }`}
          >
            <input
              type="radio"
              name="options"
              id="current"
              autocomplete="off"
              onClick={() => this.handleToggle("CURRENT")}
            />{" "}
            {t.totalCurrent}
          </label>
          <label
            className={`btn btn-${
              this.state.visibility === "DESTROYED" ? "info" : "secondary"
            }`}
          >
            <input
              type="radio"
              name="options"
              id="destroyed"
              autocomplete="off"
              onClick={() => this.handleToggle("DESTROYED")}
            />{" "}
            {t.totalDestroyed}
          </label>
        </div>
      </div>
    );
  };

  Summary = () => {
    return (
      <div>
        <div className="h3"></div>
        <table className="table table-hover">
          <thead>
            <tr className="text-capitalize">
              <th scope="col">#</th>
              <th scope="col">{t.key}</th>
              <th scope="col">{t.qty}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row" className="text-capitalize">
                1.
              </th>
              <td>{t.totalNests}</td>
              <td>{this.state.entriesInFrame.length}</td>
            </tr>
            <tr>
              <th scope="row">2.</th>
              <td>{t.totalDestroyed}</td>
              <td>{this.state.count.destroyedNests}</td>
            </tr>

            <tr>
              <th scope="row">3.</th>
              <td>{t.totalCurrent}</td>
              <td>
                {this.state.entriesInFrame.length -
                  this.state.count.destroyedNests}
              </td>
            </tr>
            <tr>
              <th scope="row">4.</th>
              <td className="text-capitalize">{t.swallow}</td>
              <td>{this.state.count.swallowNests}</td>
            </tr>
            <tr>
              <th scope="row">5.</th>
              <td className="text-capitalize">{t.swift}</td>
              <td>{this.state.count.swiftNests}</td>
            </tr>
            <tr>
              <th scope="row">6.</th>
              <td className="text-capitalize">{t.martin}</td>
              <td>{this.state.count.martinNests}</td>
            </tr>
            <tr>
              <th scope="row">7.</th>
              <td className="text-capitalize">{t.red_rumped_swallow}</td>
              <td>{this.state.count.redrumpedSwallowNests}</td>
            </tr>
            <tr>
              <th scope="row">8.</th>
              <td className="text-capitalize">{t.pallid_swift}</td>
              <td>{this.state.count.pallidSwiftNests}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  withinBounds = e => {
    const gps = gpsToArray(e.gps);
    if (
      gps[0] > this.state.bounds.southWest.lat &&
      gps[0] < this.state.bounds.northEast.lat &&
      gps[1] > this.state.bounds.southWest.lng &&
      gps[1] < this.state.bounds.northEast.lng
    ) {
      return true;
    } else {
      return false;
    }
  };

  handleViewportChanged = () => {
    let bounds = this.refs.map.leafletElement.getBounds();
    this.setState({
      ...this.state,
      bounds: {
        northEast: { lat: bounds._northEast.lat, lng: bounds._northEast.lng },
        southWest: { lat: bounds._southWest.lat, lng: bounds._southWest.lng }
      },
      entriesInFrame: this.state.totalEntries.filter(e => this.withinBounds(e)),
      count: {
        swallowNests: this.state.entriesInFrame.filter(
          e => e.species === "swallow"
        ).length,
        martinNests: this.state.entriesInFrame.filter(
          e => e.species === "martin"
        ).length,
        swiftNests: this.state.entriesInFrame.filter(e => e.species === "swift")
          .length,
        pallidSwiftNests: this.state.entriesInFrame.filter(
          e => e.species === "pallid_swift"
        ).length,
        redrumpedSwallowNests: this.state.entriesInFrame.filter(
          e => e.species === "red_rumped_swallow"
        ).length,
        destroyedNests: this.state.entriesInFrame.filter(
          e => e.destroyed === true
        ).length
      }
    });
  };

  Legend = () => {
    return (
      <div>
        <span className="text-capitalize">
          <svg width="30px">
            <circle
              r="10px"
              stroke="#cc0000"
              fill="#cc0000"
              opacity="0.7"
              cx="20"
              cy="75"
            ></circle>
          </svg>
          {t.swallow}
        </span>
        <span className="text-capitalize">
          <svg width="30px">
            <circle
              r="10px"
              opacity="0.7"
              stroke="#3300ff"
              fill="#3300ff"
              cx="20"
              cy="75"
            ></circle>
          </svg>
          {t.swift}
        </span>
        <span className="text-capitalize">
          <svg width="30px">
            <circle
              r="10px"
              stroke="#669999"
              fill="#669999"
              opacity="0.7"
              cx="20"
              cy="75"
            ></circle>
          </svg>
          {t.pallid_swift}{" "}
        </span>
        <span className="text-capitalize">
          <svg width="30px">
            <circle
              r="10px"
              stroke="#FF759C"
              fill="#FF759C"
              opacity="0.7"
              cx="20"
              cy="75"
            ></circle>
          </svg>
          {t.red_rumped_swallow}{" "}
        </span>
        <span className="text-capitalize">
          <svg width="30px">
            <circle
              r="10px"
              stroke="#ffcc33"
              fill="#ffcc33"
              opacity="0.7"
              cx="20"
              cy="75"
            ></circle>
          </svg>
          {t.martin}{" "}
        </span>
      </div>
    );
  };

  render() {
    return (
      <div>
        <div className="container bp-2">
          <div className="d-flex flex-row">
            <div>
              <div className="row" style={{ padding: "1rem" }}>
                {this.Selector()}
              </div>
              <div className="row">
                <LeafletMap
                  center={[36.253, -5.965]}
                  zoom={17}
                  touchZoom={false}
                  scrollWheelZoom={false}
                  ref="map"
                  onViewportChange={() => this.handleViewportChanged()}
                >
                  <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  />
                  {this.state.entries.map(entry => (
                    <Circle
                      center={[
                        gpsToArray(entry.gps)[0],
                        gpsToArray(entry.gps)[1]
                      ]}
                      fillColor={this.handleColor(entry)}
                      color={this.handleColor(entry)}
                      radius={5}
                    >
                      <Popup>{this.handlePopup(entry)}</Popup>
                      <Tooltip>{this.handleTooltip(entry)}</Tooltip>
                    </Circle>
                  ))}
                </LeafletMap>
              </div>
              {this.Legend()}
            </div>
            <div className="m-4 pt-4">
              {" "}
              <div>{t.tableInfo} </div>
              {this.Summary()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MapComponent;
