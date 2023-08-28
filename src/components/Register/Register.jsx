import AuthPage from "../AuthPage/AuthPage";
import CTA from "../CTA/CTA";

const Register = ({
  values,
  errors,
  handleChange,
  isValid,
  onSubmit,
  resetForm,
}) => {
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
    },
    {
      label: "E-mail",
      type: "email",
      name: "email",
      placeholder: "E-mail",
      required: true,
      autoComplete: "off",
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
      />
      <CTA text="Уже зарегистрированы?" linkText="Войти" to="/signin" />
    </main>
  );
};

export default Register;
