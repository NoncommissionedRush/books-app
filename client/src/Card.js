import React from "react";

function Card(props) {
  return (
    <div className={"card"}>
      <img src={props.cover} alt="book-cover" />
    </div>
  );
}

export default Card;
