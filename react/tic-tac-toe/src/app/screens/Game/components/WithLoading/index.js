import React from 'react';
import Spinner from 'react-spinkit';

const withLoading = showLoad => Component =>
  function Wrapped(props) {
    return showLoad(props) ? <Spinner name="circle" color="purple" /> : <Component {...props} />;
  };

export default withLoading;
