import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TitleComp from "../utils/TitleComp";
import Review from "./Review";
import slack from "../../Assets/slack.png"
import trivago from "../../Assets/trivago.png"

const reviews = [
  {
    id: 1,
    review:
      "“I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.\"",
    stars: 3.4,
    img: slack,
  },
  {
    id: 2,
    review:
      "“I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad I decided to work with you. It's really great how easy your websites are to update and manage.\"",
    stars: 4,
    img: trivago,
  },
];

class ReviewSection extends Component {
  constructor() {
    super();
    this.state = { reviews: reviews };
  }
  render() {
    return (
      <section className="review-section pb-5 mt-5 text-white">
        <Container>
          <TitleComp title={"Trusted by 1200+ world class businesses"} />
          <div className= "d-flex flex-column flex-lg-row justify-content-between align-items-center gap-5 pb-5">
          {this.state.reviews.map((review) => (
            <Review key= {review.id} review={review} />
          ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default ReviewSection;
