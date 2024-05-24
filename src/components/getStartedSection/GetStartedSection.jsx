import React, { Component } from "react";
import { Container,Button } from "react-bootstrap";
import icon1 from "../../Assets/getStarted1.png";
import icon2 from "../../Assets/getStarted2.png";
import SingleService from "../services/SingleService";

const cardData = [
  {
    id: 1,
    title: "Store data on cloud",
    details: "Create beautiful landing pages with Rareblocks that converts.",
    icon: icon1,
  },
  {
    id: 2,
    title: "Connect dots smartly",
    details: "Create beautiful landing pages with Rareblocks that converts.",
    icon: icon2,
  },
];

class GetStartedSection extends Component {
  constructor() {
    super();
    this.state = { cardData };
  }
  render() {
    return (
      <section className="mt-3 get-started-section">
        <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between ">
          <div className="get-started-left-div">
            <h4>Ready to get started?</h4>
            <p>Create custom landing pages with Rareblocks that converts more visitors than any website. With lots of unique blocks, you can easily build a page.</p>
            <div>
              <Button variant="danger" className="d-flex align-items-center  px-3 py-2 rounded-0 gap-2 text-center">Try 14 Days Free</Button>
            </div>
          </div>
          <div className="get-started-right-div d-flex flex-column flex-md-row align-items-center justify-content-end gap-5 pe-5">
            {this.state.cardData.map((service) => (
              <SingleService key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default GetStartedSection;
