import CTA from "../CTA/CTA";
import AuthPage from "../AuthPage/AuthPage";

const Login = () => {
  const loginInputs = [
    { label: "E-mail", type: "email", name: "email" },
    { label: "Пароль", type: "password", name: "password" },
  ];

  return (
    <>
      <AuthPage
        title="Рады видеть!"
        inputs={loginInputs}
        buttonText="Войти"
        buttonModifier="login"
      />
      <CTA
        text="Еще не зарегистрированы?"
        linkText="Регистрация"
        to="/signup"
      />
    </>
  );
};

export default Login;
