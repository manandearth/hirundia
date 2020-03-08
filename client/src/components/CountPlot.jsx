import React, { PropTypes, useEffect, useState } from "react";
import { createClassFromLiteSpec } from "react-vega-lite";
import VegaLite from "react-vega-lite";
import { getTransitData } from "../api.js";

const spec = {
  title: "Nests counted by species",
  width: 800,
  height: 500,
  mark: { type: "bar", cornerRadiusEnd: 4 },
  encoding: {
    x: { aggregate: "count", field: "*", type: "quantitative" },
    y: { field: "species", type: "nominal" }
  }
};

const CountPlot = () => {
  const [barData, setBarData] = useState({ values: [] });

  useEffect(() => {
    getTransitData().then(response => {
      if (response) {
        const data = response.data ? response.data : "boo";
        setBarData({ values: data });
      }
    });
  }, []);
  return (
    <>
      <VegaLite spec={spec} data={barData} />;
    </>
  );
};

export default CountPlot;
