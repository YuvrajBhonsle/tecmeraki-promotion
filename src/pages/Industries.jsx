import React from "react";
import "./Industries.css";
import CustomNodeElement from "../Components/CustomNodeElement";
import IndustriesData from "../IndustriesData.json";
import Tree from "react-d3-tree";
import { useCenteredTree } from "../hooks/useCenteredTree";

function Industries() {
  const [translate, containerRef] = useCenteredTree();
  const [isDesktop, setIsDesktop] = React.useState(false);

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsDesktop(width >= 992 ? true : false);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div className="industries-container" ref={containerRef}>
        <Tree
          data={IndustriesData}
          translate={translate}
          orientation={"horizontal"}
          initialDepth={1}
          separation={{
            siblings: 1,
            nonSiblings: 1,
          }}
          zoomable={false}
          nodeSize={{ x: 40, y: 40 }}
          renderCustomNodeElement={(props) => {
            return <CustomNodeElement {...props} isDesktop={isDesktop} />;
          }}
          shouldCollapseNeighborNodes
          depthFactor={isDesktop ? 300 : 100}
          pathClassFunc={() => "tree-link"}
          enableLegacyTransitions
          svgClassName="tree-root"
        />
      </div>
      <h2 className="directional-text blink">
        Click on any industry to expand it's services
      </h2>
    </div>
  );
}

export default Industries;
