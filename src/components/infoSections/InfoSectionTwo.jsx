import React, { Component } from "react";
import { Container } from "react-bootstrap";
import sectionImg from "../../Assets/sectionImg2.png";

class InfoSectionTwo extends Component {
  render() {
    return (
      <section className="second-info-section">
        <Container className="d-flex flex-column flex-md-row align-items-center justify-content-between gap-5">
          <div className="w-100 w-md-50 p-5">
            <img src={sectionImg} alt="" className="w-100" />
          </div>
          <div className="w-100 w-md-50 d-flex flex-column gap-4">
            <h4 className="info-sec-title">Data exchange is <br /> the most secure</h4>
            <p className="info-sec-details">
              Data security refers to the process of protecting all data from
              unauthorized access and data corruption throughout its lifecycle.{" "}
            </p>
          </div>
        </Container>
      </section>
    );
  }
}

export default InfoSectionTwo;
