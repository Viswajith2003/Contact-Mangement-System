import React from "react";

export default function Header({name}) {
  return (
    <div className="ui fixed menu">
      <div className="ui container">
        <h1 className="ui header" style={{ textAlign: "center", width: "100%" }}>
          {name}
        </h1>
      </div>
    </div>
  );
}
