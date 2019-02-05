import React from 'react';
import withValidation from './with-validation';

const DisplayTheSecret = props => (
  <div>
    The secret to life is {props.secret} {props.secret}.
  </div>
);

const WrappedComponent = withValidation(DisplayTheSecret, 'this');
export default WrappedComponent;