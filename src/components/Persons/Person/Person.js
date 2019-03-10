import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  render() {
    console.log("[Person.js] rendering");
    return (
      <div className={classes.Person}>
        <h1 onClick={this.props.clicked}>{this.props.name}</h1>
        <p>my age is : {this.props.age}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
    );
  }
}
export default Person;
