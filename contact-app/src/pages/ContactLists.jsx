import React, { useEffect, useRef, useState } from "react";
import ContactCard from "../components/ContactCard";
import { Link } from "react-router-dom";
import ApiFetch from "../components/apiFetchingPractice";
import Counter from "../components/counter";
import CounterReview from "../components/CounterReview";

export default function ContactLists(props) {
  // console.log(props);
  const inputEle = useRef("");
  const deleteContactHandler = (id) => {
    const confirmDelete = window.confirm(
      "Do you want to delete this contact ?"
    );
    if (confirmDelete) {
      props.getContactId(id);
    }
  };

  const getSearchTerm = () => {
    props.searchKeyword(inputEle.current.value);

    // console.log(inputEle.current.value)
  };

  // fetchApi();
  // const contacts = [
  //   {
  //     id: "1",
  //     name: "Viswa",
  //     email: "cs@gmail.com",
  //   },
  // ];
  return (
    <div style={{ marginTop: "40px", marginLeft: "20px", marginRight: "20px" }}>
      <div className="flex">
        <h2
          className="text-2xl font-bold mb-4"
          style={{ marginLeft: "20px", width: "100%", marginTop: "50px" }}
        >
          Contact List
        </h2>

        <Link to="/add">
          <button
            className="ui button blue right"
            style={{
              marginTop: "40px",
              marginLeft: "auto",
              marginRight: "20px",
              width: "fit-content",
              height: "fit-content",
              padding: "10px 20px",
            }}
          >
            Add Contact
          </button>
        </Link>
      </div>
      <div className="ui search">
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            type="text"
            placeholder="Search Contacts"
            className="prompts"
            value={props.term}
            ref={inputEle}
            onChange={getSearchTerm}
          />
          <i className="search icon "></i>
        </div>
      </div>
      <div className="ui celled list">
        {props.contacts.length > 0 ? (
          props.contacts.map((contact) => (
            <ContactCard
              clickHandler={deleteContactHandler}
              contact={contact}
              key={contact.id ? contact.id : `contact-${contact.email}`}
            />
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "40px",
              color: "#666",
              fontSize: "1.2em",
            }}
          >
            No Contacts Available
          </div>
        )}
      </div>

      {/* <ApiFetch/> */}
      {/* <Counter/> */}
      {/* <CounterReview/> */}
    </div>
  );
}
