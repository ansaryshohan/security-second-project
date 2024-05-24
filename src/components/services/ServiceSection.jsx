import React, { Component } from "react";
import { Container } from "react-bootstrap";
import icon1 from "../../Assets/icon1.png";
import icon2 from "../../Assets/icon2.png";
import icon3 from "../../Assets/icon3.png";
import SingleService from "./SingleService";

const serviceData = [
  {
    id: 1,
    title: "Solve Problems Real Time",
    details:
      "Real-time problem solving is not just about time, it's about time. This allows you to solve problems within a specified time problem has a solution.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Secured & Safe Payments",
    details:
      "By and large, credit cards are easily the most secure and safe payment method to use when you shop online. credit cards most secure.",
    icon: icon2,
  },
  {
    id: 3,
    title: "24/7 Customer Support",
    details:
      "The biggest benefit of offering 24/7 support is that you provide a more convenient service for your customers providing clock support.",
    icon: icon3,
  },
];

class ServiceSection extends Component {
  constructor(){
    super();
    this.state= {serviceData:serviceData};
  }
  render() {
    return (
      <section className= "py-5 mt-5">
        <Container>
          <div  className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-1">
            {
              this.state.serviceData.map((service,index)=><SingleService key={service.id} service={service} index={index}/>)
            }
          </div>
        </Container>
      </section>
    );
  }
}

export default ServiceSection;
