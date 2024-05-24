import React, { Component } from "react";

class SingleUpperFooter extends Component {
  render() {
    const {singleData:{ title, options }} = this.props;
    return (
      <div>
        <h4 className="footer-title">{title}</h4>
        {options?.map((option, index) => (
          <h5 key={index} className="footer-options"> {option}</h5>
        ))}
      </div>
    );
  }
}

export default SingleUpperFooter;
