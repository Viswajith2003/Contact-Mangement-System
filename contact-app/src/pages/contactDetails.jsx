import React from "react";
import { Link, useLocation } from "react-router-dom";
import user from "../assets/profile.jpg";
const ContactDetail = () => {
  const location = useLocation();
  console.log(location.state.contact);
  const {name ,email}=location.state.contact;

  return (
    <div className="main">
      <div className="ui card centered">
        <div className="ui button blue center">
          <Link to="/">
            <button className="buttonBack">Back to Contact List</button>
          </Link>
        </div>
        <div className="image">
          <img src={user} alt="user" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="description">{email}</div>
        </div>
      </div>
    </div>
  );
};
export default ContactDetail;
