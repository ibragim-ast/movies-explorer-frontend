import AuthPage from "../AuthPage/AuthPage";
import CTA from "../CTA/CTA";
import useAuthRedirect from "../../hooks/useAuthRedirect";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NAME_REGEX, EMAIL_REGEX } from "../../utils/constants";

const Register = ({
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

  const registerInputs = [
    {
      label: "Имя",
      type: "text",
      name: "name",
      placeholder: "Имя",
      required: true,
      minLength: 2,
      maxLength: 30,
      autoComplete: "off",
      pattern: NAME_REGEX,
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      placeholder: "E-mail",
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

  return (
    <main>
      <AuthPage
        modifier="register"
        title="Добро пожаловать!"
        inputs={registerInputs}
        buttonText="Зарегистрироваться"
        buttonModifier="register"
        values={values}
        errors={errors}
        handleChange={handleChange}
        resetForm={resetForm}
        isValid={isValid}
        onSubmit={onSubmit}
        requestErrorMessage={requestErrorMessage}
      />
      <CTA text="Уже зарегистрированы?" linkText="Войти" to="/signin" />
    </main>
  );
};

export default Register;
