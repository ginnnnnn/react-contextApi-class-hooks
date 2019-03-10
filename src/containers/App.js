import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js],constructor");
    // this.state={
    //   persons: [
    //     { name: "Austin", age: "36", id: "aq1" },
    //     { name: "Max", age: "45", id: "aq2" },
    //     { name: "Vicky", age: "24", id: "aq3" },
    //     { name: "Boston", age: "23", id: "aq4" }
    //   ],
    //   showCards: false
    // };
  }
  state = {
    persons: [
      { name: "Austin", age: "36", id: "aq1" },
      { name: "Max", age: "45", id: "aq2" },
      { name: "Vicky", age: "24", id: "aq3" },
      { name: "Boston", age: "23", id: "aq4" }
    ],
    showCards: false,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerviedStateFromProps", props);
    return state;
  }

  componentDidMount() {
    console.log("[App.js] ,componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] ,shouldcomponentUpdate");
    return true;
  }

  componentDidUpdate() {
    console.log("[App.js] ,componentDidUpdate");
  }

  nameChangeHandler = (event, id) => {
    const targetIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const updatePersons = [...this.state.persons];
    updatePersons[targetIndex].name = event.target.value;
    this.setState({ persons: updatePersons });
  };

  showCardsHandler = () => {
    this.setState({ showCards: !this.state.showCards });
  };

  deleteCardsHandler = index => {
    const updateCards = [...this.state.persons];
    console.log(index);
    updateCards.splice(index, 1);
    this.setState({
      persons: updateCards
    });
  };

  render() {
    console.log("[App.js] ,render");
    let persons = null;
    if (this.state.showCards === true) {
      persons = (
        <Persons
          personsArray={this.state.persons}
          changed={this.nameChangeHandler}
          clicked={this.deleteCardsHandler}
        />
      );
    }

    return (
      <div className={classes.App}>
        <button
          className={classes.btn}
          onClick={() => {
            this.setState({ showCockpit: !this.state.showCockpit });
          }}
        >
          {this.state.showCockpit === true ? "Remove Cockpit" : "Show Cockpit"}
        </button>
        {this.state.showCockpit === true ? (
          <Cockpit
            showCards={this.state.showCards}
            appTitle={this.props.title}
            clicked={this.showCardsHandler}
            length={this.state.persons.length}
          />
        ) : null}

        {persons}
      </div>
    );
  }
}

export default App;
