import React, { Component } from "react";

class SingleService extends Component {
  render() {
    const {
      service: { title, details, icon },
      index,
    } = this.props;
    const color = index === 1 ? "#008EFF" : index === 2 ? "#FABB18" : "#45C646";

    if (index || index === 0) {
      //========== this div will be returned for service section;
      return (
        <div
          className={`${
            Number(index) === 1
              ? "middled-div-border px-3 px-md-5  py-5 py-md-3 "
              : "p-3"
          } service-div d-flex flex-column  align-item-center justify-content-between gap-3 `}
        >
          <div className="service-icon-div" style={{ backgroundColor: color }}>
            <img src={icon} alt="" />
          </div>
          <h4>{title}</h4>
          <p>{details}</p>
        </div>
      );
    }
    //========= this div will be returned for getStarted Section;
    return (
      <div
        className={`get-started-card d-flex flex-column align-item-center justify-content-between gap-3 p-3 border rounded`}
      >
        <div className="get-started-card-icon-div">
          <img src={icon} alt="" />
        </div>
        <h4>{title}</h4>
        <p>{details}</p>
      </div>
    );
  }
}

export default SingleService;
