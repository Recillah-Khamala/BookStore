import { useState } from 'react';

const Set = () => {
  const [values, setValues] = useState({});

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return {
    values,
    onChange,
    setValues,
  };
};

export default Set;
