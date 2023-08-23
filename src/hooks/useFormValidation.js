import { useState, useCallback } from 'react';

const useFormValidator = (initialValues = {}) => {

  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleChange = (evt) => {
    const { value, name } = evt.target;
    setValues({ ...values, [name] : value});
    setErrors({ ...errors, [name]: evt.target.validationMessage,});
    setIsValid(evt.target.closest('form').checkValidity());
    };

  const resetForm = useCallback(() => {
      setValues({});
      setErrors({});
      setIsValid(false);
    }, []);

  return {
    values,
    errors,
    isValid,
    handleChange,
    resetForm,
    setValues,
  };
};

export default useFormValidator;