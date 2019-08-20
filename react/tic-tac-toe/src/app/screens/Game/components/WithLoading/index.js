import React from 'react';
import Spinner from 'react-spinkit';

function withLoading(Component) {
  return function Wrapped(props) {
    return props.loading ? <Spinner name="circle" color="purple" /> : <Component {...props} />;
  };
}

export default withLoading;
