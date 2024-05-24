import React, { Component } from "react";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

class StarsComp extends Component {
  render() {
    const { stars } = this.props; //3.99
    const numberAfterPoint = Number(stars.toFixed(2).split(".")[1]);
    const ceilNumber = Math.ceil(Number(stars.toFixed(2)));

    if (stars) {
      const arrayOfNumber = Array.from(Array(5), (d, i) => i + 1);

      const arrayOfStars = arrayOfNumber.map((numberFromArray, i) => {
        if (numberFromArray/* 4 */ <= Number(stars) /* 3.8 */ ) {
          return <FaStar key={i} color="#F97316" size={25} />;
        } else if (numberFromArray === ceilNumber/* 4 */ && numberAfterPoint > 50) {
          return <FaStarHalfAlt key={i} color="#F97316" size={25} />;
        } else {
          return <FaRegStar key={i} color="#F97316" size={25} />;
        }
      });

      return <div className="d-flex gap-1">{arrayOfStars}</div>;
    }
  }
}

export default StarsComp;
