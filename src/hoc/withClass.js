import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default withClass;
//higher order component set up with class
