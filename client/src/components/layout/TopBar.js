import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../authentication/SignOutButton";
import logo from "../../images/Hydrospire logo large.jpg";

const TopBar = ({ user }) => {
  const unauthenticatedListItems = [
    <li key="sign-in">
      <Link to="/user-sessions/new">Sign In</Link>
    </li>,
    <li key="sign-up">
      <Link to="/users/new" className="button">
        Sign Up
      </Link>
    </li>,
  ];

  const authenticatedListItems = [
    <li key="sign-out">
      <SignOutButton />
    </li>,
  ];

  return (
    <div className="top-bar">
      <div className="top-bar-left">
        <ul className="menu">
          <Link to="/">
            <img className="home-page-logo" src={logo} style={{ height: "4rem" }} />
          </Link>
          {/* <li className="menu-text">App</li> */}
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/">
              <h5>Home</h5>
            </Link>
          </li>
          <li>
            <Link to="/iri">
              <h5>IRI</h5>
            </Link>
          </li>
          <li>
            <Link to="/team">
              <h5>Team</h5>
            </Link>
          </li>
          <li>
            <Link to="/contact">
              <h5>Contact</h5>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TopBar;
