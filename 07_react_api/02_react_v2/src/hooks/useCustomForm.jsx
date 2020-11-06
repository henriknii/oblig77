import { useState } from 'react';

const useCustomForm = ({ initialState }) => {
  const [values, setValues] = useState(initialState || {});
  const [errors, setErrors] = useState(null);
  const [submitable, setSubmitable] = useState(false);

  const handleChange = (event) => {
    const { target } = event;
    const { name, value } = target;
    setValues({ ...values, [name]: value });
  };

  const validateForm = () => {
    if (!values.title || values.title === '' || values.title.length < 3) {
      setErrors('Fyll ut tittel');
    } else {
      setErrors('');
      setSubmitable(true);
    }
  };

  return {
    values,
    errors,
    handleChange,
    validateForm,
    submitable,
  };
};

export default useCustomForm;
