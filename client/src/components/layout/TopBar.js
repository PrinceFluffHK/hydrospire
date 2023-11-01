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
            <img className="home-page-logo" src={logo} style={{ height: "3rem" }} />
          </Link>
          {/* <li className="menu-text">App</li> */}
        </ul>
      </div>
      <div className="top-bar-right">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/team">Team</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        {/* <ul className="menu">{user ? authenticatedListItems : unauthenticatedListItems}</ul> */}
      </div>
    </div>
  );
};

export default TopBar;
