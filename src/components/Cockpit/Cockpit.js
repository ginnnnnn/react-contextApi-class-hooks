import React, { useEffect } from "react";
import classes from "./Cockpit.css";

const cockpit = props => {
  // useEffect(() => {
  //   console.log("[Cockpit.js] useEffect"); //use for every update,http request
  //   setTimeout(() => {
  //     alert("[cockpit.js] webApi");
  //   }, 1000);
  // }, [props.length]); //runs when props.length change [] runs when initial

  useEffect(() => {
    console.log("[Cockpit.js] useEffect");
    setTimeout(() => {
      alert("[cockpit.js] webApi");
    }, 1000);
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
      <button className={btn} onClick={() => props.clicked()}>
        Show cards
      </button>
    </div>
  );
};

export default React.memo(cockpit);
