
import React from 'react';

const withValidation = (WrappedComponent, validations) => {
  class HOC extends React.Component {
    render() {
      return (
        <WrappedComponent
          {...this.props}
          validations={validations}
        />
      );
    }
  }
    
  return HOC;
};

export default withValidation;