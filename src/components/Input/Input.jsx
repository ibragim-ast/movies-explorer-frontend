import "./Input.css";

const Input = ({ label, type, name, inputModifier }) => {
  return (
    <div className="input__container">
      <label className="input__title">{label}</label>
      <input className="input" type={type} name={name} />
      <span className="input__error"></span>
    </div>
  );
};

export default Input;
