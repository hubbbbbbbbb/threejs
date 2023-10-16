import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";

const CustomButton = (props) => {
  const snap = useSnapshot(state);

  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`py-1.2 px-2 flex-1 rounded-md ${props.customStyle}`}
      style={generateStyle(props.type)}
      onClick={props.handleClick}
    >
      {props.title}
    </button>
  );
};

export default CustomButton;
