import "./Button.css";

const Button = ({ modifier, text, disabled, type, handler }) => {
  return (
    <button
      className={`button button-hover ${
        modifier ? `button_type_${modifier}` : ""
      }`}
      type={type ? type : "submit"}
      disabled={disabled}
      onClick={handler}
    >
      {text}
    </button>
  );
};

export default Button;
