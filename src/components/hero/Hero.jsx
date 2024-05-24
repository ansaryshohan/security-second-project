import React, { Component } from "react";
import { Button, Container } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import heroImg from "../../Assets/hero.png";

class Hero extends Component {
  render() {
    return (
      <section className="hero-section">
        <Container className="pt-5 pt-lg-2">
          <div className="mt-5 d-flex flex-column flex-md-row justify-content-between align-items-center gap-5 gap-md-2">
            <div className="w-100 w-md-50 p-4 p-md-1 p-lg-5">
              <img src={heroImg} alt="hero" className="w-100" />
            </div>
            <div className="w-100 w-md-50 px-3">
              <div className="hero-text d-flex flex-column gap-1 gap-lg-3 mb-3">
                <p className="text-danger sub-title">
                  Ensuring maximum security
                </p>
                <h1 className="mt-0 pt-0">
                  Protect all your <br /> data with strong <br /> security
                  access
                </h1>
                <p>
                  This is software that protects all your data, including strong
                  security access. Use data as needed and provide security.
                </p>
              </div>
              <div>
                <Button variant="danger"className=" d-flex align-items-center  px-3 py-2 rounded-0 gap-2 text-center">
                  <span className=" d-flex align-items-center ">
                    <FaSearch />
                  </span>
                  <span className="d-inline-block">
                    Scan Your Website - Free!
                  </span>
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }
}

export default Hero;
