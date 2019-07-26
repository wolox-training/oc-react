const validate = values => {
  const errors = {}
  if (!values.email) {
    errors.username = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export default validate;
