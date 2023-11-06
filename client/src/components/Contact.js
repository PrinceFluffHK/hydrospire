import React from "react";
import emailPic from "../images/Email.png";
import callPic from "../images/Call.png";
import contactPicture from "../images/womanCalling.png";

const Contact = (props) => {
  return (
    <div>
      <div className="page-margins contact-picture-container">
        <div className="contact-picture-container" style={{ flexDirection: "column" }}>
          <h1 style={{ margin: "0rem 0rem 2rem 0rem" }}>Contact Us</h1>
          <img
            className="contact-picture"
            src={contactPicture}
            alt="https://www.shutterstock.com/image-photo/technology-communication-people-concept-happy-senior-1132144967"
          />
        </div>
        <div className="vl"></div>
        <div className="contact-container-container ">
          <div className="contact-callout">
            <div>
              <img src={emailPic} />
            </div>
            <a href="mailto: hydrospire@gmail.com">
              <h5 className="contact-callout-item">hydrospire@gmail.com</h5>
            </a>
          </div>
          <div className="contact-callout">
            <img src={callPic} />
            <h5 className="contact-callout-item">(123) 456-7890</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
