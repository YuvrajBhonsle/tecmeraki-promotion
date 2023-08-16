import service2 from "../assets/service2.webp";
import user from "../assets/client2.webp";
import Contact from "../Components/Contact";
import "./IndustrialAutomation.css";

function IndustrialElectrical() {
  return (
    <div className="main-container">
      <div className="head-container">
        <h1>Industrial Electrical/Instrumentation Field Services</h1>
        <img src={service2} alt="" />
      </div>
      <section className="description-container">
        <div className="description-header">
          <h1>Description</h1>
          <button>Get Started</button>
        </div>
        <div className="description-body">
          <p>
            Our electrical and instrumentation field work service is designed to
            provide our clients with the highest level of expertise in the
            installation, maintenance, and repair of electrical and
            instrumentation systems. Our team of highly skilled and experienced
            technicians is equipped with state-of-the-art tools and equipment to
            carry out any job, big or small, to the highest standards of quality
            and safety.
          </p>
          <p>
            Whether you need a new electrical or instrumentation system
            installed, or you require maintenance or repair work on your
            existing system, we have the expertise to provide you with the best
            possible service. Our team will work closely with you to understand
            your specific requirements and provide you with tailored solutions
            that meet your needs and budget. We pride ourselves on our ability
            to provide our clients with prompt and reliable service, ensuring
            that your electrical and instrumentation systems are always
            operating at peak performance.
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

export default IndustrialElectrical;
