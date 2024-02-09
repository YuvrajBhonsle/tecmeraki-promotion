import React from "react";
import IndustryIcon from "../assets/Icons/IndustryIcon";
import "../pages/Industries.css";
import getNodeIcon from "../utils/getNodeIcon";

const CustomNodeElement = ({ nodeDatum, toggleNode, onNodeClick }) => {
  return (
    <g onMouseEnter={toggleNode} onMouseLeave={toggleNode}>
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#d64435" />
          <stop offset="100%" stopColor="#3f2995" />
        </linearGradient>
      </defs>
      <circle r="12" fill="url(#gradient)" stroke="none" />
      <g className="text-container">
        {/* <IndustryIcon /> */}
        {getNodeIcon(nodeDatum)}
        <text
          className="rd3t-label__title"
          style={{ fontSize: 12, fontWeight: "20px" }}
          onClick={onNodeClick}
          textAnchor="center"
          display={"inline"}
          x={-22}
          y={28}
        >
          {nodeDatum.name}
        </text>
      </g>
    </g>
  );
};

export default CustomNodeElement;
