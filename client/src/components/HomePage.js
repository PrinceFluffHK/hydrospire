import React from "react";
import elder from "../images/elder.png";

const HomePage = (props) => {
  return (
    <div>
      {/* <h1 className="" style={{ textAlign: "center" }}>
        Better Recovery from Stroke and Cardiac Ischemic Events
      </h1> */}
      <div className="cover-container">
        <img
          className="cover-photo"
          src={elder}
          alt="https://www.shutterstock.com/image-photo/adult-granddaguhter-supporting-her-senior-grandmother-2172757295"
        />
      </div>
      <div className="mission-container">
        <h1 style={{ fontSize: "80px" }}>Our Mission</h1>
        <div className="hl"></div>
        <h3>
          Create the first approved hydrogen inhalation therapy system, and improve the
          lives of the millions of people impacted reperfusion injury caused by stroke and cardiac arrest
        </h3>
        <p>
          HydroSpire is a research-stage company that currently has no approved products available
          for human use{" "}
        </p>
        <div className="home-page-item"></div>
      </div>
    </div>
  );
};

export default HomePage;
