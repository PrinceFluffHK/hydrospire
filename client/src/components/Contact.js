import React from "react";
import emailPic from "../images/Email.png";
import callPic from "../images/Call.png";

const Contact = (props) => {
  return (
    <div className="page-margins">
      <div className="contact-container">
        <div className="contact-callout">
          {/* <div className="contact-callout-item"> */}
          <div>
            <img src={emailPic} />
          </div>
          <h4 className="contact-callout-item">hydrospire@gmail.com</h4>
        </div>
        <div className="contact-callout">
          <img src={callPic} />
          <h4 className="contact-callout-item">(123) 456-7890</h4>
        </div>
        {/* <div className="contact-callout">[Location Pending]</div> */}
      </div>
    </div>
  );
};

export default Contact;
