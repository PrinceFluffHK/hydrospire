import React from "react";
import shutterstock from "../images/elder.png";
// import h2Generator from "../images/generator.png"
import childMask from "../images/Child in mask.jpg"
import device from "../images/IMG_6101.jpg"

const HomePage = (props) => {
  return (
    <div>
      <h1 className="" style={{textAlign: "center"}}>Better Recovery from Stroke and Cardiac Ischemic Events</h1>
      <div className="cover-container">
        <img className="cover-photo" src={shutterstock} alt="https://www.shutterstock.com/image-photo/adult-granddaguhter-supporting-her-senior-grandmother-2172757295"/>
      </div>
      <div>
        <h1>Our Mission</h1>
        <p>Create the first officially-approved inhaled hydrogen therapy system, and improve the recovery of millions of the millions of people impacted by stroke and cardiac arrest</p>
        <p>HydroSpire is a research-stage company that currently has no approved products available for human use </p>
      </div>
    </div>
  );
};

export default HomePage;
