import React, { Fragment } from 'react';

function CustomInput(props) {
  return (
    <Fragment>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} className={props.className} />
      {props.meta.error && <span>{props.meta.error}</span>}
    </Fragment>
  );
}

export default CustomInput;
