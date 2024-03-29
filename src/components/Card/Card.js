import React from "react";
import "./card.css";

const Card = props => (
  <div className="card-container">
    <img
      alt="Monster"
      src={`https://robohash.org/${props.monster.id}?set=set3&size=180x180`}
    />
    <h2>{props.monster.name}</h2>
    <p>{props.monster.email}</p>
  </div>
);

export default Card;
