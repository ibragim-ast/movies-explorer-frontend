import React from "react";
import "./Button.css";

const Button = ({ modifier, text, handler }) => {
  return (
    <button
      className={`button ${modifier ? `button_type_${modifier}` : ""}`}
      type="submit"
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
