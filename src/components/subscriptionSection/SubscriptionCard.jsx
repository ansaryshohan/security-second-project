import React, { Component } from 'react';

class SubscriptionCard extends Component {
  render() {
    const {singleSub:{title,price,time,details}}=this.props;
    return (
      <div className="subscription-card border p-4">
        <h5>{title}</h5>
        <h4>${price}</h4>
        <h6>{time}</h6>
        <p>{details}</p>
      </div>
    );
  }
}

export default SubscriptionCard;