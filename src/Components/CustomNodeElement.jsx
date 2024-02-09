import React from "react";
import "../pages/Industries.css";
import getNodeIcon from "../utils/getNodeIcon";

const CustomNodeElement = ({ nodeDatum, toggleNode, onNodeClick }) => {
  return (
    <g onClick={toggleNode}>
      {/* <circle r="12" fill="url(#gradient)" stroke="none" /> */}

      {getNodeIcon(nodeDatum)}
      <text
        className="rd3t-label__title"
        style={{ fontSize: 12, fontWeight: "20px" }}
        onClick={onNodeClick}
        x={nodeDatum.name === "Industries" ? -16 : 34}
        y={nodeDatum.name === "Industries" ? 28 : 2}
      >
        {nodeDatum.name}
      </text>
    </g>
  );
};

export default CustomNodeElement;
