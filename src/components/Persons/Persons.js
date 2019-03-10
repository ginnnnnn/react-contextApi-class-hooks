import React, { Component } from "react";
import Person from "./Person/Person";

//extends PureComponent ,get shouldComponentUpdate and check all props changed

class Persons extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate");
    return nextProps.personsArray !== this.props.personsArray;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate");
    return { message: "Snapshot!" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate", snapshot);
  }

  componentWillUnmount() {
    console.log("[Persons.js] ,componentWillUnmount");
  }
  render() {
    console.log("[Persons.js] rendering");
    return this.props.personsArray.map((person, index) => {
      return (
        <Person
          name={person.name}
          age={person.age}
          changed={event => this.props.changed(event, person.id)}
          id={person.id}
          key={person.id}
          clicked={() => this.props.clicked(index)}
        />
      );
    });
  }
}
export default Persons;
