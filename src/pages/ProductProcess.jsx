import React from "react";
import { Link } from "react-router-dom";
import sewage from "../assets/sewage.png";
import solutionEnergy from "../assets/solutions-energy.png";
import solutionProduction from "../assets/solutions-production.png";
import solutionRO from "../assets/solutions-ro.png";
import solutionMachine from "../assets/solutions-machine.png";
import metalworks from "../assets/metalworks.png";
import plastics from "../assets/plastics.png";
import textile from "../assets/textile.png";
import construction from "../assets/construction.png";
import "./BuildingManagement.css";

const ProductProcess = () => {
  return (
    <>
      <section className="building-container">
        <div className="building-head-container">
          <h1 className="building-head">Production Process Monitoring</h1>
        </div>
      </section>
      <section className="body-container">
        <main className="body-hero-container">
          <p>
            Our user-friendly and affordable IoT solution helps you to get
            maximum savings in operating costs. This is made possible by
            improving operator productivity and equipment utilization. Product
            quality is not compromised in the process. It provides centralized
            monitoring and analytics capabilities at the equipment level. Our
            long experience in the manufacturing segment ensures smooth project
            execution with minimum support from the customer.
          </p>
          <h2>Capabilities</h2>
          <div className="body-main-container">
            <section className="body-main-list">
              <ul>
                <li>
                  Production process parameters monitoring
                  <ul>
                    <li>Production count</li>
                    <li>Idle & downtime</li>
                    <li>Operator efficiency</li>
                    <li>Shift wise efficiency</li>
                    <li>
                      Production environment (Temperature, RH, CO2, PM2.5 & 10)
                    </li>
                    <li>Maintenance effectiveness</li>
                  </ul>
                </li>
                <li>
                  Energy, Water (Hot & Cold), Compressed air, Steam, and Fuel
                  consumption monitoring
                </li>
                <li>Predictive maintenance</li>
                <li>Storage monitoring</li>
                <li>
                  Condition monitoring of assets like
                  <ul>
                    <li>Pumps</li>
                    <li>Motors</li>
                    <li>Diesel generators</li>
                    <li>UPS</li>
                  </ul>
                </li>
              </ul>
            </section>
            <section>
              <img src={solutionProduction} alt="production" />
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

        <main className="deployed-container">
          <h2>Deployed in the following industries</h2>
          <section className="deployed-body-container">
          <div className="deployed-body">
            <p>Metalworks</p>
            <img src={metalworks} alt="" />
          </div>
          <div className="deployed-body">
            <p>Plastic injection molding</p>
            <img src={plastics} alt="" />
          </div>
          <div className="deployed-body">
            <p>Textile</p>
            <img src={textile} alt="" />
          </div>
          <div className="deployed-body">
            <p>Construction</p>
            <img src={construction} alt="" />
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
                <Link to="/sewage">Sewage Treatment</Link>
              </p>
              <img src={sewage} alt="sewage" />
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

export default ProductProcess;
