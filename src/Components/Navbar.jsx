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
      } else if(!navRef.current.contains(event.target)){
        setDropdown(false)
      }
      // console.log(event.target.textContent)
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div>
          <img src={logo} alt="profile pic" />
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
          <div className="dropdown">
            <a onClick={() => setDropdown(!dropdown)}>Industries & Solutions</a>
          </div>
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
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/buildingManagement">Building Management</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/productProcess">Product Process Monitoring</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/roPlant">RO Plant Monitoring</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/sewage">Sewage Treatment Plant</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/energyManagement">Energy Management</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/machineHealth">Machine Health Monitoring</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/logistics">Connected Logistics</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/assetManagement">Asset Management & Ticketing</Link>
              </a>
            </section>
            <section className="solutions-section">
              <h1>Solutions</h1>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/buildingManagement">Advanced IoT Solutions</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/productProcess">Networking Excellence</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/roPlant">Field Work Expertise</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/sewage">Automation Solutions</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/energyManagement">
                  PLC (Programmable Logic Controller) Solutions
                </Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/machineHealth">
                  HMI (Human Machine Interface) Solutions
                </Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/logistics">
                  MES (Manufacturing Execution System) Solutions
                </Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/assetManagement">
                  SCADA (Supervisory Control and Data Acquisition) Solutions
                </Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/assetManagement">
                  Robotics and Automation Integration
                </Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/assetManagement">Process Optimization</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/assetManagement">Energy Management Solutions</Link>
              </a>
              <a href="/" onClick={handleDropdownLinkClick}>
                <Link to="/assetManagement">Custom Solution Development</Link>
              </a>
            </section>
          </div>
        </>
      )}
    </>
  );
}

export default Navbar;
