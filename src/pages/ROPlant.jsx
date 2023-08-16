import React from "react";
import { Link } from "react-router-dom";
import BMS from "../assets/BMS.png";
import solutionEnergy from "../assets/solutions-energy.png";
import solutionProduction from "../assets/solutions-production.png";
import solutionRO from "../assets/solutions-ro.png";
import solutionMachine from "../assets/solutions-machine.png";
import "./BuildingManagement.css";

const ROPlant = () => {
  return (
    <>
      <section className="building-container">
        <div className="building-head-container">
          <h1 className="building-head">RO Plant Monitoring</h1>
        </div>
      </section>
      <section className="body-container">
        <main className="body-hero-container">
          <p>
            Our user-friendly and affordable IoT solution helps you to get
            maximum uptime and the highest quality water. This is made possible
            by monitoring the various process parameters using sensors and IO
            cards. It provides centralized monitoring and control capabilities
            at the plant level. Our long experience in the Internet of things
            (IoT) ensures smooth project execution with minimum support from the
            customer.
          </p>
          <h2>Capabilities</h2>
          <div className="body-main-container">
            <section className="body-main-list">
              <ul>
                <li>Energy and Water consumption monitoring</li>
                <li>Money collected via cash & Smart card</li>
                <li>
                  Water quality monitoring
                  <ul>
                    <li>Conductivity</li>
                    <li>TDS</li>
                    <li>PH</li>
                  </ul>
                </li>
                <li>
                  Plant status
                  <ul>
                    <li>Pump On / Off cycles and Operation duration</li>
                    <li>Raw and treated water tank level</li>
                    <li>Low and high pressure level</li>
                    <li>Plant uptime</li>
                    <li>Filter block detection</li>
                    <li>Backwash cycle time</li>
                    <li>Flow rate</li>
                    <li>Plant efficiency (Capacity vs output)</li>
                  </ul>
                </li>
                <li>Electrical parameters: Voltage, Current & Power</li>
              </ul>
            </section>
            <section>
              <img src={solutionRO} alt="ro" />
            </section>
          </div>
          {/* <p className="body-img-description">
            Deployed in IT, Retail, Shopping malls, Hospitals, Industrial
            buildings, Educational institutes, Hotels, Apartments, Govt.
            buildings & campuses
          </p> */}
        </main>
        <main className="features-container">
          <div>
            <h2>Features</h2>
            <ul>
              <li>Dynamic Dashboard</li>
              <li>Customizable Excel and PDF reports</li>
              <li>Consumption-based billing</li>
              <li>Remote control: ON/OFF, Modulation, Mode, & Scheduling</li>
              <li>Automatic alerts generation and escalation: email & SMS</li>
              <li>
                Artificial Intelligence (AI) driven insights & actions for
                optimizations
              </li>
              <li>
                <a href="/">Read more on IoT platform</a>
              </li>
            </ul>
          </div>
          <div>
            <h2>Benefits</h2>
            <ul>
              <li>Energy saving</li>
              <li>
                24×7 monitoring of mission-critical assets to ensure high uptime
              </li>
              <li>
                Improvement in health, efficiency, utilization & life of the
                equipment
              </li>
              <li>Reduction in manpower requirement</li>
              <li>Better visibility in day to day operations</li>
              <li>Easy policy adherence check and enforcement</li>
            </ul>
          </div>
        </main>

        <main className="why-us-container">
          <h1>Why Us?</h1>
          <section className="why-us-body">
            <div className="why-body">
              <h2>Reliable Hardware</h2>
              <p>
                Time tested, high quality, designed, developed & manufactured in
                India. 18 months replacement warranty.
              </p>
            </div>
            <div className="why-body">
              <h2>Innovative Software</h2>
              <p>
                Easy to use, reliable, highly scalable, and cloud-based IoT
                software platform.
              </p>
            </div>
            <div className="why-body">
              <h2>Turnkey Solution</h2>
              <p>
                Everything including hardware supply, cloud hosting,
                installation, commissioning and maintenance
              </p>
            </div>
            <div className="why-body">
              <h2>Competitive Cost</h2>
              <p>
                Cloud hosting starts as low as INR 299 per month & Hardware
                prices are best in the industry
              </p>
            </div>
          </section>
        </main>

        <main className="other-solutions-container">
          <h2>Other Solutions</h2>
          <section className="other-body-container">
            <div className="other-body">
              <p>
                <Link to="/energyManagement">Energy Management</Link>
              </p>
              <img src={solutionEnergy} alt="energy" />
            </div>
            <div className="other-body">
              <p>
                <Link to="/productProcess">Production Monitoring</Link>
              </p>
              <img src={solutionProduction} alt="production" />
            </div>
            <div className="other-body">
              <p>
                <Link to="/buildingManagement">Building Management</Link>
              </p>
              <img src={BMS} alt="building" />
            </div>
            <div className="other-body">
              <p>
                <Link to="/machineHealth">Machine Health</Link>
              </p>
              <img src={solutionMachine} alt="machine" />
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default ROPlant;
