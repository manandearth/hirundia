import React, { PropTypes } from "react";
import { createClassFromLiteSpec } from "react-vega-lite";
import VegaLite from "react-vega-lite";

const spec = {
  description: "A simple bar chart with embedded data.",
  mark: "bar",
  encoding: {
    x: { field: "a", type: "ordinal" },
    y: { field: "b", type: "quantitative" }
  }
};

const barData = {
  values: [
    { a: "A", b: 20 },
    { a: "B", b: 34 },
    { a: "C", b: 55 },
    { a: "D", b: 19 },
    { a: "E", b: 40 },
    { a: "F", b: 34 },
    { a: "G", b: 91 },
    { a: "H", b: 78 },
    { a: "I", b: 25 }
  ]
};

const ScatterPlot = () => <VegaLite spec={spec} data={barData} />;

export default ScatterPlot;

// export default createClassFromLiteSpec("BarChart", {
//   description: "A simple bar chart with embedded data.",
//   mark: "bar",
//   encoding: {
//     x: { field: "a", type: "ordinal" },
//     y: { field: "b", type: "quantitative" }
//   }
// });
