import React from "react";
import logo from "../images/Hydrospire logo large.jpg";
import metaKnight from "../images/MK.jpeg";
import shutterstock from "../images/elder.png";

const HomePage = (props) => {
  return (
    <div>
      <div className="cover-container">
        <img className="cover-photo" src={shutterstock} alt="https://www.shutterstock.com/image-photo/adult-granddaguhter-supporting-her-senior-grandmother-2172757295"/>
      </div>
      <h1 className="" style={{textAlign: "center"}}>Helping Ensure a Healthy Tomorrow</h1>
      <div className="">
        <div className="grid-x home-page-panel">
          <div className="home-page-item cell small-12 medium-6">
            <img className="stock-image" src={metaKnight} />
          </div>
          <div className="home-page-item cell small-12 medium-6">
            <h1>A Fight Worth Fighting</h1>
            <div className="p-container">
              <p>Critical nerve damage caused by loss of blood oxygen ("Ischemia") is associated with some of society's biggest killers: Cardiac Arrest and Strokes</p>
            </div>
          </div>
        </div>
        <div className="grid-x home-page-panel-blue">
          <div className="home-page-item cell small-12 medium-6">
            <h1>How Hydrogen Helps</h1>
            <div className="p-container">
              <p>Hydrogen gas has been shown to reduce tissue damage caused by ischemia reperfusion</p>
            </div>
          </div>
          <div className="home-page-item cell small-12 medium-6">
            <img className="stock-image" src={metaKnight} />
          </div>
        </div>
        <div className="grid-x home-page-panel">
          <div className="home-page-item cell small-12 medium-6">
            <img className="stock-image" src={metaKnight} />
          </div>
          <div className="home-page-item cell small-12 medium-6">
            <h1>Our Mission</h1>
            <div className="p-container">
              <p>With a recently-developed H<sub>2</sub> generator, our team looks to enable canister-less ventilators, granting greater flexibility to those who need it most</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
