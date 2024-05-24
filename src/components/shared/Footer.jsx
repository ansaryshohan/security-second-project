import React, { Component } from 'react';
import {Container} from "react-bootstrap"
import UpperFooter from './UpperFooter';
import LowerFooter from './LowerFooter';

class Footer extends Component {
  render() {
    return (
      <section className="w-100 footer text-white py-5">
          <Container>
            <UpperFooter/>
            <hr />
            <LowerFooter/>
          </Container>
        
      </section>
    );
  }
}

export default Footer;