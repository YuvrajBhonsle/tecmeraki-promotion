import AutomotiveIcon from "../assets/Icons/AutomotiveIcon";
import Chemical from "../assets/Icons/Chemical";
import EnergyIcon from "../assets/Icons/EnergyIcon";
import FnB from "../assets/Icons/FnB";
import IndustryIcon from "../assets/Icons/IndustryIcon";
import Logistics from "../assets/Icons/Logistics";
import OilnGas from "../assets/Icons/OilnGas";
import Pharma from "../assets/Icons/Pharma";
import ServicesIcon from "../assets/Icons/ServicesIcon";
import Utility from "../assets/Icons/Utility";

const getNodeIcon = (nodeDatum) => {
  //   if (nodeDatum.name === "Industries") return;
  console.log("heres nodedatum", nodeDatum);
  if (nodeDatum.children) {
    switch (nodeDatum.name) {
      case "Oil and Gas Industry":
        return <OilnGas />;
      case "Pharmaceutical Industry":
        return <Pharma />;
      case "Chemical Industries":
        return <Chemical />;
      case "Food and Beverage Industry":
        return <FnB />;
      case "Energy Industry":
        return <EnergyIcon />;
      case "Logistics and Warehousing Industry":
        return <Logistics />;
      case "Automotive Industry":
        return <AutomotiveIcon />;
      case "Utility":
        return <Utility />;
      default:
        return <IndustryIcon />;
    }
  } else {
    return <ServicesIcon />;
  }
};

export default getNodeIcon;
