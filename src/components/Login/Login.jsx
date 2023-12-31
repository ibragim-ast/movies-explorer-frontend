import CTA from "../CTA/CTA";
import AuthPage from "../AuthPage/AuthPage";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EMAIL_REGEX } from "../../utils/constants";

const Login = ({
  values,
  errors,
  handleChange,
  isValid,
  onSubmit,
  resetForm,
  requestErrorMessage,
  isLoggedIn,
}) => {
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const navigate = useNavigate();

  useAuthRedirect(isLoggedIn, setShouldRedirect);

  useEffect(() => {
    if (shouldRedirect) {
      navigate("/");
    }
  }, [navigate, shouldRedirect]);

  const loginInputs = [
    {
      label: "E-mail",
      placeholder: "E-mail",
      type: "email",
      name: "email",
      required: true,
      autoComplete: "off",
      pattern: EMAIL_REGEX,
    },
    {
      label: "Пароль",
      type: "password",
      name: "password",
      placeholder: "Пароль",
      required: true,
      minLength: 8,
      maxLength: 30,
      autoComplete: "off",
    },
  ];

  const handleLogin = (values) => {
    onSubmit(values);
  };

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
        onSubmit={handleLogin}
        resetForm={resetForm}
        requestErrorMessage={requestErrorMessage}
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
