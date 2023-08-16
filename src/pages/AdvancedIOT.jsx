import service3 from "../assets/service3.webp";
import user from "../assets/client2.webp";
import Contact from "../Components/Contact";
import "./IndustrialAutomation.css";

function AdvancedIOT(){
  return (
    <div className="main-container">
      <div className="head-container">
        <h1>Advanced IOT & Networking Solutions</h1>
        <img src={service3} alt="" />
      </div>
      <section className="description-container">
        <div className="description-header">
          <h1>Description</h1>
          <button>Get Started</button>
        </div>
        <div className="description-body">
          <p>
          Our IoT/network services cater to businesses and organizations seeking to leverage the power of connectivity to enhance their operations and capabilities. We offer a range of solutions that enable seamless communication between devices, machines, and systems – all designed to improve efficiency, productivity, and performance.
          </p>
          <p>
          Our team of experts work closely with clients to understand their needs, identify pain points, and develop tailored solutions that address specific challenges. We provide end-to-end support, from the design and implementation of IoT networks to ongoing maintenance and monitoring. With our services, clients can expect improved data collection and analysis, reduced downtime, enhanced security, and streamlined business processes. Whether it’s optimizing supply chain management, creating smart buildings, or developing innovative products, our IoT/network services can help businesses achieve their goals and stay ahead of the curve.
          </p>
        </div>
        <div className="description-footer">
          <section className="key-points">
            <h4>Key Points</h4>
            <ul>
              <li>Efficiency optimization through automation</li>
              <li>Expertise in IOT and network services</li>
              <li>
                Safe and reliable electrical and instrumentation solutions
              </li>
              <li>Customized solutions tailored to specific needs</li>
              <li>Timely and cost-effective project execution</li>
            </ul>
          </section>
          <section className="user-testimonial">
            <h4>User Testimonial</h4>
            <div className="testimonial-body">
              <div className="testimonial-desc">
                <h2>Jessica Simon</h2>
                <p>
                  I am extremely pleased with the industrial services provided
                  by this company, especially their expertise in automation,
                  IOT, networking, and electrical/instrumentation field work.
                </p>
              </div>
              <img src={user} alt="" />
            </div>
          </section>
        </div>
      </section>
      <Contact />
    </div>
  );
}

export default AdvancedIOT;