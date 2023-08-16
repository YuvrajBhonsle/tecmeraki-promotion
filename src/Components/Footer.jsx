import React from "react";
import "./footer.css";
import { BsLinkedin, BsInstagram } from "react-icons/bs";
import { BiSolidPhoneCall } from "react-icons/bi";
// import facebook from "../assets/facebook.png";
// import linkedin from "../assets/linkedin.png";
// import twitter from "../assets/pngtwitter.png";
import logo from "../assets/Logo.png";
function Footer() {
  return (
    <div className="footer-section">
      <div className="socials">
        {/* <img  id='facebook' src={facebook} alt="facebook" />
            <img  id='linkedin' src={linkedin} alt="linkedin" />
            <img id='twitter'  src={twitter} alt="twitter" /> */}
        <span><BsLinkedin style={{ color: "white", fontSize: "1.75rem" }} /></span>
        <span>
          <BsInstagram style={{ color: "white", fontSize: "1.75rem" }} />
        </span>
        <span>
          <BiSolidPhoneCall style={{ color: "white", fontSize: "1.75rem" }} />
        </span>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="contact-email">
        <p>automation@gmail.com</p>
      </div>
      <div className="copyright">
        <p>All right reserved 2023 @ automation pvt. ltd.</p>
      </div>
    </div>
  );
}
export default Footer;
