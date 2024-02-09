import "./Navbar.css";
import { useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";

function Navbar() {
  const [dropdown, setDropdown] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

  const handleDropdownLinkClick = () => {
    setDropdown(false);
    // document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        event.target.textContent == "Home" ||
        event.target.textContent == "About" ||
        event.target.textContent == "Contact"
      ) {
        setDropdown(false);
      } else if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        event.target.id !== "ham"
      ) {
        closeNavbar();
      } else if (!navRef.current.contains(event.target)) {
        setDropdown(false);
      }
      // console.log(event.target.textContent)
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  return (
    <>
      <header>
        <div className="logo">
          <img
            src={logo}
            alt="profile pic"
            style={{ height: "4em", width: "8em", justifySelf: "center" }}
          />
        </div>
        <nav ref={navRef}>
          <a href="/" onClick={closeNavbar}>
            <NavLink to="/">Home</NavLink>{" "}
          </a>
          <a href="/" onClick={closeNavbar}>
            <NavLink to="/about">About</NavLink>
          </a>
          <a href="/#services" onClick={closeNavbar}>
            Services
          </a>
          <a href="/" onClick={closeNavbar}>
            <NavLink to="/industries">Industries and Solutions</NavLink>{" "}
          </a>
          <a href="/contactpage" onClick={closeNavbar}>
            <NavLink to="/contactpage">Contact</NavLink>
          </a>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" id="ham" onClick={showNavbar}>
          <AiOutlineMenu />
        </button>
      </header>
      {/* {dropdown && <div className="overlay" onClick={closeNavbar} />} */}
      {dropdown && (
        <>
          <div className="dropdown-content">
            <section className="industries-section">
              <h1>Industries</h1>
              {industriesData.map((item, index) => (
                <a key={index} href="/" onClick={handleDropdownLinkClick}>
                  <Link to={item.link}>{item.title}</Link>
                </a>
              ))}
            </section>
            <section className="solutions-section">
              <h1>Solutions</h1>
              <main className="solutions-body">
                {solutionsData.map((item, index) => (
                  <div
                    key={index}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Link to={item.link}>{item.title}</Link>
                    {activeIndex === index && (
                      <ul>
                        {item.content.map((contentItem, contentIndex) => (
                          <li key={contentIndex}>{contentItem}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </main>
            </section>
          </div>
        </>
      )}
    </>
  );
}

const industriesData = [
  {
    title: "Building Management",
    link: "/buildingManagement",
  },
  {
    title: "Product Process Monitoring",
    link: "/productProcess",
  },
  {
    title: "RO Plant Monitoring",
    link: "/roPlant",
  },
  {
    title: "Sewage Treatment Plant",
    link: "/sewage",
  },
  {
    title: "Energy Management",
    link: "/energyManagement",
  },
  {
    title: "Machine Health Monitoring",
    link: "/machineHealth",
  },
  {
    title: "Connected Logistics",
    link: "/logistics",
  },
  {
    title: "Asset Management & Ticketing",
    link: "/assetManagement",
  },
];

const solutionsData = [
  {
    title: "Advanced IoT Solutions",
    link: "/buildingManagement",
    content: [
      "Remote Monitoring and Control",
      "Predictive Maintenance",
      "Data Analytics and Insights",
      "Real-time Asset Tracking",
      "Condition Monitoring",
    ],
  },
  {
    title: "Networking Excellence",
    link: "/networkingExcellence",
    content: [
      "Industrial Ethernet Networks",
      "Wireless Connectivity Solutions",
      "Network Security and Cybersecurity",
      "Network Redundancy and Reliability",
      "Network Performance Optimization",
    ],
  },
  {
    title: "Field Work Expertise",
    link: "/fieldWorkExpertise",
    content: [
      "Equipment Installation and Commissioning",
      "Maintenance and Repairs",
      "Upgrades and Retrofits",
      "Calibration and Testing",
      "On-Site Troubleshooting and Support",
    ],
  },
  {
    title: "Automation Solutions",
    link: "/automationSolutions",
    content: [
      "Process Automation",
      "Robotics Integration",
      "PLC and HMI Programming",
      "SCADA System Implementation",
      "MES (Manufacturing Execution System) Integration",
    ],
  },
  {
    title: "PLC (Programmable Logic Controller) Solutions",
    link: "/plcSolutions",
    content: [
      "PLC Programming and Configuration",
      "PLC System Design",
      "PLC Troubleshooting and Debugging",
      "PLC Networking and Communication",
      "PLC Hardware Selection",
    ],
  },
  {
    title: "HMI (Human Machine Interface) Solutions",
    link: "/hmiSolutions",
    content: [
      "HMI Design and Interface Development",
      "Visualization and Operator Interface",
      "Alarm Management and Reporting",
      "Touchscreen and User Interaction",
    ],
  },
  {
    title: "MES (Manufacturing Execution System) Solutions",
    link: "/mesSolutions",
    content: [
      "Production Tracking and Reporting",
      "Work Order Management",
      "Inventory and Material Management",
      "Quality Control and Compliance",
      "Performance Analysis and KPI Monitoring",
    ],
  },
  {
    title: "SCADA (Supervisory Control and Data Acquisition) Solutions",
    link: "/scadaSolutions",
    content: [
      "Real-time Process Monitoring",
      "Remote Control and Supervision",
      "Data Acquisition and Historization",
      "Alarm Notification and Management",
      "SCADA System Integration",
    ],
  },
  {
    title: "Robotics and Automation Integration",
    link: "/roboticsIntegration",
    content: [
      "Robotic Workcell Design and Integration",
      "Robotic Arm Programming",
      "Collaborative Robotics (Cobots)",
      "Robotic Vision and Sensing",
      "End-of-Arm Tooling Design",
    ],
  },
  {
    title: "Process Optimization",
    link: "/processOptimization",
    content: [
      "Workflow Analysis and Improvement",
      "Lean Manufacturing Implementation",
      "Six Sigma Process Optimization",
      "Efficiency Enhancement Strategies",
      "Waste Reduction and Cost Savings",
    ],
  },
  {
    title: "Energy Management Solutions",
    link: "/energyManagementSolutions",
    content: [
      "Energy Monitoring and Analysis",
      "Energy Efficiency Assessment",
      "Load Management and Demand Response",
      "Renewable Energy Integration",
      "Energy Consumption Optimization",
    ],
  },
  {
    title: "Custom Solution Development",
    link: "/customSolutionDevelopment",
    content: [
      "Tailored Automation Solutions",
      "Custom Equipment Design and Fabrication",
      "Integration with Third-party Systems",
      "Bespoke Software Development",
      "Unique Industrial Challenges Resolution",
    ],
  },
];

export default Navbar;
