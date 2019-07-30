import React from 'react';

function CustomInput(props) {
  return (
    <div>
      <label>{props.label}</label>
      <input {...props.input} type={props.type} className={props.className} />
      {props.meta.error && <span>{props.meta.error}</span>}
    </div>
  );
}

export default CustomInput;
