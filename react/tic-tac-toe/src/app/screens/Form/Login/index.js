import React from 'react';
import { Field, reduxForm, Form } from 'redux-form';

import styles from '../styles.module.scss';

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ? 'Invalid email address' : undefined;

function Login({ handleSubmit }) {
  return (
    <Form className={styles.loginForm} onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <Field className={styles.fields} name="email" component="input" type="text" validate={email} />
      </div>
      <div>
        <label>Password</label>
        <Field className={styles.fields} name="password" component="input" type="password" />
      </div>
      <button className={styles.buttonSubmit} type="submit">
        Submit
      </button>
    </Form>
  );
}

export default reduxForm({
  form: 'login'
})(Login);
