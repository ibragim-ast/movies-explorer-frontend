import CTA from "../CTA/CTA";
import AuthPage from "../AuthPage/AuthPage";

const Login = ({ values, errors, handleChange, isValid }) => {
  const loginInputs = [
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
    <main>
      <AuthPage
        title="Рады видеть!"
        inputs={loginInputs}
        buttonText="Войти"
        buttonModifier="login"
        values={values}
        errors={errors}
        handleChange={handleChange}
        isValid={isValid}
      />
      <CTA
        text="Еще не зарегистрированы?"
        linkText="Регистрация"
        to="/signup"
      />
    </main>
  );
};

export default Login;
