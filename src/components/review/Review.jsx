import React, { Component } from 'react';
import StarsComp from '../utils/StarsComp';

class Review extends Component {
  render() {
    const {review:{img,stars,review}}= this.props;
    return (
      <div className="d-flex flex-column align-items-center justify-content-center gap-4">
        <StarsComp stars={stars}/>
        <p className="text-center">{review}</p>
        <div>
          <img src={img} alt="" />
        </div>
        
      </div>
    );
  }
}

export default Review;