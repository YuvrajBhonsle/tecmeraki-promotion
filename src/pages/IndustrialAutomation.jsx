import service1 from "../assets/service1.webp";
import user from "../assets/client2.webp";
import Contact from "../Components/Contact";
import "./IndustrialAutomation.css";

function IndustrialAutomation() {
  return (
    <div className="main-container">
      <div className="head-container">
        <h1>Industrial Automation Solutions</h1>
        <img src={service1} alt="" />
      </div>
      <section className="description-container">
        <div className="description-header">
          <h1>Description</h1>
          <button>Get Started</button>
        </div>
        <div className="description-body">
          <p>
            Our Automation service is designed to streamline and optimize your
            business processes, saving you time and money. We provide customized
            automation solutions that are tailored to meet the unique needs of
            your business. Our team of experts works closely with you to
            understand your current processes and identify areas where
            automation can be implemented to improve efficiency and
            productivity.
          </p>
          <p>
            With our Automation service, you can expect a reduction in manual
            labor and human error, as well as an increase in accuracy and speed.
            Our solutions can automate everything from data entry and processing
            to customer service and marketing campaigns. By automating these
            tasks, you can focus on more important aspects of your business,
            such as strategy and innovation. Our goal is to help you achieve
            your business objectives while minimizing costs and maximizing ROI.
            Contact us today to learn more about how our Automation service can
            benefit your business.
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

export default IndustrialAutomation;
