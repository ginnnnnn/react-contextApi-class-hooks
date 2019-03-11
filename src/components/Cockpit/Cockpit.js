import React, { useEffect, useRef, useContext } from "react";
import classes from "./Cockpit.css";
import AuthContext from "../../context/auth-context";

const cockpit = props => {
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect"); //use for every update,http request
  //   setTimeout(() => {
  //     alert("[cockpit.js] webApi");
  //   }, 1000);
  // }, [props.length]); //runs when props.length change [] runs when initial
  const toggleButton = useRef(null);
  const authContext = useContext(AuthContext); // passing static context in react hooks
  useEffect(() => {
    // exectue after component render like componentDidMount
    console.log("[Cockpit.js] useEffect");
    toggleButton.current.click();
    return () => {
      console.log("[Cockpit.js]  useEffect Clean up");
    };
  }, []); //passing [] ,like componentDidMount

  useEffect(() => {
    console.log("[Cockpit.js] useEffect2nd");
    return () => {
      console.log("[Cockpit.js] useEffect2nd Clean up");
    };
  }); // always update

  let btn = "";
  let pClass = "";
  if (props.length <= 3) {
    pClass = classes.Red;
  }
  if (props.length <= 2) {
    pClass = pClass + " " + classes.Bold;
  }
  if (props.showCards === true) {
    btn = classes.Red;
  }
  return (
    <div className={classes.Cockpit}>
      <h1 className={classes.title}>{props.appTitle}</h1>
      <p className={pClass}>this string will change by the numbers of cards</p>
      <button
        ref={toggleButton}
        className={btn}
        onClick={() => props.clicked()}
      >
        Show cards
      </button>
      <button className={btn} onClick={authContext.login}>
        {props.isAuthed === false ? "Login" : "logout"}
      </button>
      {/* <AuthContext.Consumer>
        {context => (
          <button className={btn} onClick={context.login}>
            {props.isAuthed === false ? "Login" : "logout"}
          </button>
        )}
      </AuthContext.Consumer> */}
    </div>
  );
};

export default React.memo(cockpit);
