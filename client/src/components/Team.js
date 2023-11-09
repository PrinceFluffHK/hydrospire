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
    "Former VP/GM Becton Dickinson. BSc Engineering Penn, BSEcon Wharton, and MBA Kellogg",
    "https://www.linkedin.com/in/douglaswlawrence/"
  );

  const lindaTempleman = new TeamMember(
    "Linda Templeman",
    "CSO",
    lindaPicture,
    "Founding CEO, Ph.D Chemical Engineering, Cornell Program Lead at Giner Labs, now GLS"
  );

  const simonStone = new TeamMember(
    "Simon G. Stone",
    "CTO",
    simonPicture,
    "Founding CTO, Program manager and engineering electrochemist at Giner Labs and now GLS MS Chemistry, Arizona State University"
  );

  const peterHemingway = new TeamMember(
    "Peter Hemingway",
    "CFO",
    peterPicture,
    "MBA, Finance, VP Strategy and Business Development BVI Medical, Waltham Plant Controller Becton Dickinson"
  );

  const johnKheir = new TeamMember(
    "Dr. John Kheir",
    "Cardiologist, Boston Children's",
    johnPicture,
    "Associate Professor at Harvard Medical School and Staff Physician in the Cardiac Intensive Care Unit at Boston Children's Hospital."
  );

  const andyBelt = new TeamMember(
    "Andy Belt",
    "Harvard MBA",
    andyPicture,
    "Bain & Co consulting, founder of consulting and packaged goods startups. Founder, Hydrospire Inc."
  );

  return (
    <div>
      <div className="page-margins">
        <h1 style={{ margin: "2rem 0rem 2rem 0rem" }}>Our Founders</h1>
        <div className="grid-x grid-margin-x">
          {dougLawrence.display()}
          {lindaTempleman.display()}
          {simonStone.display()}
          {peterHemingway.display()}
        </div>
      </div>
      <div style={{ backgroundColor: "#d8eefe", paddingTop: "1rem" }}>
        <div className="page-margins">
          <h1 style={{ margin: "0rem 0rem 2rem 0rem" }}>Our Advisors</h1>
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
