import React from "react";

export default function YinLine() {
  return (
    <div style={{ display: "flex" }}>
      <svg height="13" width="30">
        <line
          x1="0"
          y1="0"
          x2="30"
          y2="0"
          style={{ stroke: "black", strokeWidth: 13 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
      <svg height="13" width="39">
        <line
          x1="9"
          y1="0"
          x2="39"
          y2="0"
          style={{ stroke: "black", strokeWidth: 13 }}
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </div>
  );
}
