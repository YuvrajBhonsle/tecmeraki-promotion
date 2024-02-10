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

const getNodeIcon = (nodeDatum, isDesktop) => {
  //   if (nodeDatum.name === "Industries") return;
  if (nodeDatum.children) {
    switch (nodeDatum.name) {
      case "Oil and Gas Industry":
        return <OilnGas isDesktop={isDesktop} />;
      case "Pharmaceutical Industry":
        return <Pharma isDesktop={isDesktop} />;
      case "Chemical Industries":
        return <Chemical isDesktop={isDesktop} />;
      case "Food and Beverage Industry":
        return <FnB isDesktop={isDesktop} />;
      case "Energy Industry":
        return <EnergyIcon isDesktop={isDesktop} />;
      case "Logistics and Warehousing Industry":
        return <Logistics isDesktop={isDesktop} />;
      case "Automotive Industry":
        return <AutomotiveIcon isDesktop={isDesktop} />;
      case "Utility":
        return <Utility isDesktop={isDesktop} />;
      default:
        return <IndustryIcon isDesktop={isDesktop} />;
    }
  } else {
    return <ServicesIcon isDesktop={isDesktop} />;
  }
};

export default getNodeIcon;
