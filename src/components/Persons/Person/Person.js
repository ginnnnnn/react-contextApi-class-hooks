import React, { Component } from "react";
import classes from "./Person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux";
import AuthContext from "../../../context/auth-context";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef(); //create Ref method React
  }

  static contextType = AuthContext; //contextApi react16.6 has to be like this
  //it give this a property context like this.context
  componentDidMount() {
    console.log(this.context.authenticated);
    this.inputElementRef.current.focus(); // .current point current element
    // this.inputElement.focus();
  }
  render() {
    console.log("[Person.js] rendering");
    return (
      <Aux>
        <p>
          {this.context.authenticated === true
            ? `logined as ${this.props.name}`
            : "please login in"}
        </p>

        <h1 onClick={this.props.clicked}>{this.props.name}</h1>
        <p>my age is : {this.props.age}</p>
        <input
          ref={this.inputElementRef}
          // ref={inputEl => {
          //   this.inputElement = inputEl;
          // }}
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </Aux>
    );
  }
}
export default withClass(Person, classes.Person);
