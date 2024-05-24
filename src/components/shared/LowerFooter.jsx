import React, { Component } from 'react';
import{Container} from "react-bootstrap"
import logo from "../../Assets/Logo.png"
import { FaTwitter ,FaFacebookF,FaInstagram,FaGithub } from "react-icons/fa6";

class LowerFooter extends Component {
  render() {
    return (
      <section>
        <Container className="d-flex flex-column flex-md-row align-items-center justify-content-center justify-content-md-between ">
        {/* logo div */}
        <div className="d-flex align-items-center">
          <img src={logo} alt=""  className="w-75 d-inline-block"/>
        </div>
        {/* copyright text duv */}
        <div className="text-center">
          <p className="pt-3">© Copyright 2021, All Rights Reserved by Postcraft</p>
        </div>
        {/* social icon div */}
        <div className="d-flex align-items-center gap-2">
          <div className="social-icon-div"><FaTwitter size={12}/></div>
          <div className="social-icon-div"><FaFacebookF size={12}/></div>
          <div className="social-icon-div"><FaInstagram size={12}/></div>
          <div className="social-icon-div"><FaGithub size={12}/></div>
        </div>
        </Container>
      </section>
    );
  }
}

export default LowerFooter;