import React, { Component } from "react";
import SingleUpperFooter from "./SingleUpperFooter";

const footerData = [
  { id: 1, title: "Company", options: ["About", "Features", "Work", "Career"] },
  {
    id: 2,
    title: "Help",
    options: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      " Privacy Policy",
    ],
  },
  {
    id: 3,
    title: "Resources",
    options: [
      "Free eBooks",
      "Development Tutorial",
      " How to - Blog",
      "Youtube Playlist",
    ],
  },
  {
    id: 4,
    title: "Extra Links",
    options: [
      "Customer Support",
      "Delivery Details",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
];

class UpperFooter extends Component {
  constructor() {
    super();
    this.state = { footerData: footerData };
  }
  render() {
    return (
      <div className="d-flex justify-content-around align-items-center gap-4 p-4 py-5 flex-wrap">
        {this.state.footerData.map((singleData) => (
          <SingleUpperFooter key={singleData.id} singleData={singleData} />
        ))}
      </div>
    );
  }
}

export default UpperFooter;
