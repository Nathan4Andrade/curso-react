import React from "react";
import "./Card.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  const style = {
    backgroundColor: props.color || "#8f83d8",
    borderColor: props.color || "#8f83d8",
  };
  return (
    <div className="Card" style={style}>
      <div className="Title">{props.titulo}</div>
      <div className="Content">{props.children}</div>
    </div>
  );
};
