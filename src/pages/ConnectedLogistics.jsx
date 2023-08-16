import React from "react";
import { Link } from "react-router-dom";
import Logistics from "../assets/logistics.png";
import solutionEnergy from "../assets/solutions-energy.png";
import solutionProduction from "../assets/solutions-production.png";
import solutionRO from "../assets/solutions-ro.png";
import solutionMachine from "../assets/solutions-machine.png";
import "./BuildingManagement.css";

const ConnectedLogistics = () => {
  return (
    <>
      <section className="building-container">
        <div className="building-head-container">
          <h1 className="building-head">Connected Logistics</h1>
        </div>
      </section>
      <section className="body-container">
        <main className="body-hero-container">
          <p>
            For fleet management, companies want to ensure that they do not
            suffer costly breakdowns that result in delays in product delivery
            and cause financial losses. Our user-friendly and affordable
            solution that helps to overcome challenges faced in day to day
            operations by providing real-time information on the location of the
            vehicle, condition of the cargo, and driver behavior.
          </p>
          <h2>Capabilities</h2>
          <div className="body-main-container">
            <section className="body-main-list">
              <ul>
                <li>GPS/GLONASS tracking</li>
                <li>Vibration monitoring</li>
                <li>
                  Cabin parameters monitoring
                  <ul>
                    <li>Temperature</li>
                    <li>Cargo door status</li>
                  </ul>
                </li>
                <li>Driver behavior monitoring like speeding</li>
                <li>Geofencing with configurable tolerance</li>
                <li>Collision (Accident) detection</li>
                <li>
                  Alert based on
                  <ul>
                    <li>Cargo cabin conditions</li>
                    <li>Vehicle speed and location</li>
                    <li>Vibration level</li>
                  </ul>
                </li>
                <li>Predictive maintenance alerts based on AI algorithms</li>
              </ul>
            </section>
            <section>
              <img src={Logistics} alt="logistics" />
            </section>
          </div>
          <p className="body-img-description">
            Deployed in Cold storage vehicles, Cargo trucks, Earthmoving
            machinery, and Goods wagons
          </p>
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

export default ConnectedLogistics;
