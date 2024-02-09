import React from "react";
import "./Industries.css";
import CustomNodeElement from "../Components/CustomNodeElement";
import IndustriesData from "../IndustriesData.json";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../hooks/useCenteredTree";

function Industries() {
  const [translate, containerRef] = useCenteredTree();
  return (
    <div className="industries-container" ref={containerRef}>
      <Tree
        data={IndustriesData}
        translate={translate}
        orientation="horizontal"
        initialDepth={1}
        separation={{ siblings: 0.9, nonSiblings: 1 }}
        zoomable={false}
        nodeSize={{ x: 50, y: 50 }}
        renderCustomNodeElement={CustomNodeElement}
        shouldCollapseNeighborNodes
        depthFactor={300}
        pathClassFunc={() => "tree-link"}
      />
    </div>
  );
}

export default Industries;
