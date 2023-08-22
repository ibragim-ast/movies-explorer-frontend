import AuthPage from "../AuthPage/AuthPage";
import CTA from "../CTA/CTA";

const Register = () => {
  const registerInputs = [
    { label: "Имя", type: "name", name: "name" },
    { label: "E-mail", type: "email", name: "email" },
    { label: "Пароль", type: "password", name: "password" },
  ];

  return (
    <>
      <AuthPage
        modifier="register"
        title="Добро пожаловать!"
        inputs={registerInputs}
        buttonText="Зарегистрироваться"
        buttonModifier="register"
      />
      <CTA text="Уже зарегистрированы?" linkText="Войти" to="/signin" />
    </>
  );
};

export default Register;
