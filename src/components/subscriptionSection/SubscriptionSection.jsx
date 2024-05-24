import React, { Component } from "react";
import { Container,Button } from "react-bootstrap";
import TitleComp from "../utils/TitleComp";
import SubscriptionCard from "./SubscriptionCard";

const subscriptionDetails = [
  {
    id: 1,
    title: "1 Week",
    price: 4,
    time: "Less than $1 a day",
    details: "Billed every week Cancel anytime",
  },
  {
    id: 2,
    title: "1 Month",
    price: 19,
    time: "Less than $5 a week",
    details: "Billed every month Cancel anytime",
  },
  {
    id: 3,
    title: "1 Year",
    price: 99,
    time: "Less than $2 a week",
    details: "Billed every year Cancel anytime",
  },
];

class SubscriptionSection extends Component {
  constructor(){
    super();
    this.state={subscriptionDetails:subscriptionDetails}
  }
  render() {
    return (
      <section className="pb-5">
        <Container className="d-flex flex-column gap-3 align-items-center">
          <TitleComp title={"Affordable plans for our customers"} />
          <p className="subtitle-subscription text-center">
            Try free for 30 Days
          </p>
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-5 pt-5">
            {
              this.state.subscriptionDetails.map(singleSub=><SubscriptionCard key={singleSub.id} singleSub={singleSub}/>)
            }
          </div>
          <div>
            <Button variant="danger" className="rounded-0 px-3 py-2 mt-2">Get started now</Button>
          </div>
        </Container>
      </section>
    );
  }
}

export default SubscriptionSection;
