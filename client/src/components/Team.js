import React from "react";
import TeamMember from "../models/TeamMember.js";
import dougPicture from "../images/1516275782592.jpeg";
import lindaPicture from "../images/LindaTempleton.jpeg";
import simonPicture from "../images/Simon.png";
import peterPicture from "../images/Screenshot 2023-10-31 at 12.47.17 PM.png";
import johnPicture from "../images/Screenshot 2023-10-31 at 12.58.55 PM.png";
import andyPicture from "../images/Andy.png";

const Team = (props) => {
  const dougLawrence = new TeamMember(
    "Doug Lawrence",
    "CEO",
    dougPicture,  
    "Former VP/GM Becton Dickinson. BSc Engineering Penn, BSEcon Wharton, MBA Kellogg",
  );

  const lindaTempleman = new TeamMember(
    "Linda Templeman",
    "CSO",
    lindaPicture,
    "Ph.D Chemical Engineering, Cornell. Program Lead at Giner Labs, now GLS"
  );

  const simonStone = new TeamMember(
    "Simon G. Stone",
    "CTO",
    simonPicture,
    "Founding CTO, Program Manager and Engineering ElectroChemist at Giner Labs and Giner Life Sciences. MS Chemistry, Arizona State University"
  );

  const peterHemingway = new TeamMember(
    "Peter Hemingway",
    "CFO",
    peterPicture,
    "MBA, Finance, Babson. VP Strategy and Business Development BVI Medical, Waltham Plant Controller Becton Dickinson"
  );

  const johnKheir = new TeamMember(
    "Dr. John Kheir",
    "Cardiologist, Boston Children's Hospital",
    johnPicture,
    "Associate Professor at Harvard Medical School and Staff Physician in the Cardiac Intensive Care Unit at Boston Children's Hospital."
  );

  const andyBelt = new TeamMember(
    "Andy Belt",
    "MBA, Harvard",
    andyPicture,
    "Bain & Co Consulting. Founder of consulting and packaged goods startups. Founder, Hydrospire Inc."
  );

  return (
    <div style={{ margin: "2rem 0rem 0rem 0rem" }}>
      <div className="page-margins">
        <h1 className="team-headers">Our Founders</h1>
        <div className="grid-x grid-margin-x">
          {dougLawrence.display()}
          {lindaTempleman.display()}
          {simonStone.display()}
          {peterHemingway.display()}
        </div>
      </div>
      <div style={{ backgroundColor: "#d8eefe", paddingTop: "1rem" }}>
        <div className="page-margins">
          <h1 className="team-headers">Our Advisors</h1>
          <div className="grid-x grid-margin-x" style={{ paddingBottom: "2rem" }}>
            {johnKheir.display()}
            {andyBelt.display()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
