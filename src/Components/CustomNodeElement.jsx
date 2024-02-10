import React from "react";
import "../pages/Industries.css";
import getNodeIcon from "../utils/getNodeIcon";

const CustomNodeElement = ({
  nodeDatum,
  toggleNode,
  onNodeClick,
  isDesktop,
}) => {
  return (
    <g onClick={toggleNode} className="node">
      {/* <circle r="12" fill="url(#gradient)" stroke="none" /> */}

      {getNodeIcon(nodeDatum, isDesktop)}
      {isDesktop ? (
        <text
          className="rd3t-label__title"
          style={{ fontSize: 12, fontWeight: "20px" }}
          onClick={onNodeClick}
          x={nodeDatum.name === "Industries" ? -16 : 34}
          y={nodeDatum.name === "Industries" ? 28 : 2}
        >
          {nodeDatum.name}
        </text>
      ) : (
        <foreignObject x={-8} y={8} width={100} height={50}>
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            className="rd3t-label__title"
            style={{
              fontSize: "6px",
              fontWeight: "20px",
              wordWrap: "break-word",
            }}
            onClick={onNodeClick}
          >
            {nodeDatum.name.split("industry")[0]}
          </div>
        </foreignObject>
      )}
    </g>
  );
};

export default CustomNodeElement;
