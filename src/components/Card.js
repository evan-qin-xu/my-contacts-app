import React from "react";
import Detail from "./Detail";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{props.name}</h2>
      </div>
      <div className="bottom">
        <Detail detailInfo={props.tel} textLabel="Tel: " />
        <Detail detailInfo={props.email} textLabel="Email: "/>
        <Detail detailInfo={props.website} textLabel="Website: " />
      </div>
    </div>
  );
}

export default Card;