import AuthPage from "../AuthPage/AuthPage";
import CTA from "../CTA/CTA";

const Register = ({ values, errors, handleChange, isValid }) => {
  const registerInputs = [
    {
      label: "Имя",
      type: "name",
      name: "name",
      required: true,
      minLength: 8,
      maxLength: 30,
      autoComplete: "off",
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      required: true,
      autoComplete: "off",
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      required: true,
      minLength: 8,
      maxLength: 30,
      autoComplete: "off",
    },
  ];

  return (
    <>
      <AuthPage
        modifier="register"
        title="Добро пожаловать!"
        inputs={registerInputs}
        buttonText="Зарегистрироваться"
        buttonModifier="register"
        values={values}
        errors={errors}
        handleChange={handleChange}
        isValid={isValid}
      />
      <CTA text="Уже зарегистрированы?" linkText="Войти" to="/signin" />
    </>
  );
};

export default Register;
