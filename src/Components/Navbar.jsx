import "./Navbar.css";
import { useRef } from "react";
import { FaTimes } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import logo from "../assets/Logo.png";
import { Link, NavLink } from "react-router-dom";
function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const closeNavbar = () => {
    navRef.current.classList.remove("responsive_nav");
  };

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
            <a>Solutions</a>
            <div className="dropdown-content">
              <a href="/">
                <Link to="/buildingManagement">Building Management</Link>
              </a>
              <a href="/">
                <Link to="/productProcess">Product Process Monitoring</Link>
              </a>
              <a href="/">
                <Link to="/roPlant">RO Plant Monitoring</Link>
              </a>
              <a href="/">
                <Link to="/sewage">Sewage Treatment Plant</Link>
              </a>
              <a href="/">
                <Link to="/energyManagement">Energy Management</Link>
              </a>
              <a href="/">
                <Link to="/machineHealth">Machine Health Monitoring</Link>
              </a>
              <a href="/">
                <Link to="/logistics">Connected Logistics</Link>
              </a>
              <a href="/">
                <Link to="/assetManagement">Asset Management & Ticketing</Link>
              </a>
            </div>
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
        {/* <button className='hire'>
                    Enterprise Solutions
                </button> */}
      </header>
    </>
  );
}

export default Navbar;
