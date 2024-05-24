import React, { Component } from "react";
import { Container } from "react-bootstrap";
import sectionImg from "../../Assets/sectionImg1.png";

class InfoSectionOne extends Component {
  render() {
    return (
      <section className="first-info-section">
        <Container className="d-flex flex-column-reverse flex-md-row align-items-center justify-content-between gap-5">
          <div className="w-100 w-md-50 d-flex flex-column gap-4">
            <h4 className="info-sec-title">We take care <br /> of your website</h4>
            <p className="info-sec-details">
              We secure websites by automatically finding and fixing threats.
              Website security software protects your data website from
              malicious cyber threats.{" "}
            </p>
          </div>
          <div className="w-100 w-md-50 p-5">
            <img src={sectionImg} alt="" className="w-100" />
          </div>
        </Container>
      </section>
    );
  }
}

export default InfoSectionOne;
