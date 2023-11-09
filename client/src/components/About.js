import React from "react";
import metaKnight from "../images/MK.jpeg";
import bloodClot from "../images/bloodClot.png"
import rescucitation from "../images/rescucitation.png"
import stent from "../images/stent.png"
import damagedBrain from "../images/damagedBrain.png"
import hydrogenMolecule from "../images/hydrogenMolecule.png"
import recoveringStroke from "../images/recoveringStroke.png"
import device from "../images/IMG_6101.jpg"
import research from "../images/research.png"

const IRI = (props) => {
  return (
    <div className="">
      <div className="home-page-panel iri-container">
        <h1>Ischemia and Reperfusion Injury (IRI)</h1>
        <p className="p-iri">
          Ischemia is caused by interruption of oxygen carrying blood flow to any part of the body.
        </p>
        <p className="p-iri">
          It is critical to restore blood flow within minutes to limit injury to critical organs
        </p>
        <p className="p-iri">
          Ischemic events such as Stroke and Cardiac Arrest are among the leading global killers;
          over 900,000 strokes and 800,000 cardiac arrests happen in the USA each year.
        </p>
      </div>
      <div className="home-page-panel-blue">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={rescucitation} alt="https://www.shutterstock.com/image-photo/close-on-asian-surgical-team-performing-2115062087" />
          </div>
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={bloodClot} alt="https://www.shutterstock.com/image-photo/thickened-arteries-veins-coronary-heart-disease-2239662027" />
          </div>
          {/* <div className="cell small-12 medium-4">
            <img className="stock-image" src={metaKnight} alt="Meta Knight :0" />
          </div> */}
        </div>
      </div>
      <div className="home-page-panel iri-container">
        <h1 className="">Reperfusion Injury after restoration of blood flow</h1>
        <p className="p-iri">
          IRI of the brain is thought to occur when brain cells, deprived of oxygen, enter anaerobic
          metabolism and toxic metabolites, Reactive Oxygen Species (ROS) and precursors accumulate
        </p>
        <p className="p-iri">
          When perfusion is restored and cells resume aerobic metabolism, accumulated toxins
          overwhelm the cell's normal defenses and lead to DNA damage, cell wall disruption and
          trigger cell death / apoptosis
        </p>
      </div>
      <div className="home-page-panel-blue">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={stent} alt="https://www.shutterstock.com/image-photo/guide-wire-196685048" />
          </div>
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={damagedBrain} alt="https://www.shutterstock.com/image-photo/xray-mans-head-cerebral-stroke-brain-1892064544" />
          </div>
        </div>
      </div>
      <div className="home-page-panel iri-container">
        <h1>Hydrogen: Reducing Damage, Accelerating Recovery</h1>
        <p className="p-iri">
          Acute oxidative stress induced by ischemia-reperfusion or inflammation can cause serious
          damage to tissues.
        </p>
        <p className="p-iri">
          Research has shown than Hydrogen can scavenge these damaging oxygen compounds, without
          impacting oxygen compounds important to cell health.
        </p>
      </div>
      <div className="home-page-panel-blue">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={hydrogenMolecule} alt="https://www.shutterstock.com/image-photo/abstract-transparent-hydrogen-h2-molecules-on-2253488127" />
          </div>
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={recoveringStroke} alt="https://www.shutterstock.com/image-photo/older-woman-recovering-hospital-bed-happy-1056956138" />
          </div>
        </div>
      </div>
      <div className="home-page-panel iri-container">
        <h1>The HydroSpire Solution</h1>
        <p className="p-iri">
          We are developing electrolyser-based hydrogen generators. We will mitigate the risk of
          flammability by generating hydrogen from water at the point of use, in the exact quantity
          needed by the patient.
        </p>
        <p className="p-iri">
          We will conduct clinical studies of hydrogen, and seek approval for use in hospital and
          emergency medicine settings with indications for stroke, cardiac arrest, heart attack and
          other ischemic conditions.
        </p>
      </div>
      <div className="home-page-panel-blue">
        <div className="grid-x grid-margin-x">
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={research} alt="https://www.shutterstock.com/image-photo/young-scientists-conducting-research-investigations-medical-2149947783" />
          </div>
          <div className="cell small-12 medium-6">
            <img className="stock-image" src={device} alt="https://www.shutterstock.com/image-photo/abstract-transparent-hydrogen-h2-molecules-on-2253488127" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRI;
