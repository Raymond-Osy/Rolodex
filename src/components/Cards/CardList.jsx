import React from "react";
import "./CardList.css";

const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        <h3 key={monster.id}>{monster.name}</h3>
      ))}
    </div>
  );
};

export default CardList;
