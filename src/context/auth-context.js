import React from "react";

const authContext = React.createContext({
  authenticated: false, //passing as boolean
  login: () => {} //passing as function
});

export default authContext;
