import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';
import PropTypes from 'prop-types';

import styles from './styles.module.scss';
import { email, minLength8 } from './validate';
import CustomInput from './components/customeInput';
import { PASSWORD, LOGIN } from './constants';

function Login({ handleSubmit }) {
  return (
    <Form className={styles.loginForm} onSubmit={handleSubmit}>
      <Field
        className={styles.fields}
        name="email"
        component={CustomInput}
        type="text"
        validate={[email]}
        label="Email"
      />
      <Field
        className={styles.fields}
        name={PASSWORD}
        component={CustomInput}
        type={PASSWORD}
        validate={[minLength8]}
        label="Password"
      />
      <button className={styles.buttonSubmit} type="submit">
        Submit
      </button>
    </Form>
  );
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: LOGIN
})(Login);
