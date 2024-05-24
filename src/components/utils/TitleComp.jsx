import React, { Component } from 'react';

class TitleComp extends Component {
  render() {
    const {title} = this.props;
    return (
      <div className=" text-center title-text">
        <h4 className="section-title">{title}</h4>
      </div>
    );
  }
}

export default TitleComp;