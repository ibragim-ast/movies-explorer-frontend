import "./Button.css";

const Button = ({ modifier, text, disabled }) => {
  return (
    <button
      className={`button button-hover ${
        modifier ? `button_type_${modifier}` : ""
      }`}
      type="submit"
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
