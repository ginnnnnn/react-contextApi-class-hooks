import React, { Component } from "react";
import classes from "./App.css";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import AuthContext from "../context/auth-context";

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
    showCockpit: true,
    stateCounter: 0,
    isAuthenticated: false
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
    this.setState((prevState, props) => {
      return {
        persons: updatePersons,
        stateCounter: prevState.stateCounter + 1
      };
    }); //best way of changine state by the prevState
  };

  showCardsHandler = () => {
    this.setState({ showCards: !this.state.showCards });
  };

  loginHandler = () => {
    this.setState((prevState, props) => {
      return { isAuthenticated: !prevState.isAuthenticated };
    });
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
        <AuthContext.Provider
          value={{
            authenticated: this.state.isAuthenticated,
            login: this.loginHandler
          }}
        >
          {this.state.showCockpit === true ? (
            <Cockpit
              isAuthed={this.state.isAuthenticated}
              showCards={this.state.showCards}
              appTitle={this.props.title}
              clicked={this.showCardsHandler}
              length={this.state.persons.length}
            />
          ) : null}

          {persons}
        </AuthContext.Provider>
      </div>
    );
  }
}

export default App;
