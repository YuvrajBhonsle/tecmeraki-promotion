import React from "react";
import { Link } from "react-router-dom";
import Energy from "../assets/Energy.png";
import solutionEnergy from "../assets/solutions-energy.png";
import solutionProduction from "../assets/solutions-production.png";
import solutionRO from "../assets/solutions-ro.png";
import solutionMachine from "../assets/solutions-machine.png";
import "./BuildingManagement.css";

const EnergyManagement = () => {
  return (
    <>
      <section className="building-container">
        <div className="building-head-container">
          <h1 className="building-head">Energy Management</h1>
        </div>
      </section>
      <section className="body-container">
        <main className="body-hero-container">
          <p>
            Our user-friendly and affordable IoT solution helps you to get
            maximum energy savings. This is made possible by achieving the
            highest operating efficiency. It provides centralized monitoring and
            control capabilities at the individual meter level. Our long
            experience in Building Management ensures smooth project execution
            with minimum support from the customer. We have covered more than
            20,00,000 Square Feet of buildings and measure 1 GWh per day.
          </p>
          <h2>Capabilities</h2>
          <div className="body-main-container">
            <section className="body-main-list">
              <ul>
                <li>Energy, Water & Fuel consumption monitoring</li>
                <li>
                  Voltage, Current, Power, Energy, Power factor, Frequency, Wh,
                  VAh and any other parameter present in energy meter
                </li>
                <li>
                  Energy generation and consumption from multiple sources
                  <ul>
                    <li>Electricity Board</li>
                    <li>Diesel generator</li>
                    <li>Solar</li>
                    <li>Wind turbine</li>
                  </ul>
                </li>
                <li>
                  Load-wise segregation
                  <ul>
                    <li>Lighting</li>
                    <li>HVAC</li>
                    <li>IT</li>
                  </ul>
                </li>
                <li>GST compliant billing and invoices</li>
                <li>
                  Condition monitoring of assets like UPS and Diesel generators
                </li>
                <li>
                  Datacenter room temperature & energy efficiency monitoring
                </li>
                <li>Transformer health monitoring</li>
                <li>Electrical room temperature monitoring</li>
                <li>Street light management</li>
              </ul>
            </section>
            <section>
              <img src={Energy} alt="energy" />
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
                <Link to="/roPlant">RO Plant Monitoring</Link>
              </p>
              <img src={solutionRO} alt="ro" />
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

export default EnergyManagement;
