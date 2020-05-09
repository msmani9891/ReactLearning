import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Classes from "./App.module.css";
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Cockpit from '../components/cockpit/cockpit';

class App2 extends Component {

  constructor(props) {
    super(props);
    console.log("[App.js] | Constructor", props);
  }
  

  state = {
    persons: [
      { id: 'a', name: 'Max', age: 28 },
        { id: 'b', name: 'Mani', age: 29 },
        { id: 'c', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    // console.log('Was clicked!');
    // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
    this.setState( {
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    } )
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(person => {
      return person.id === id;
    });
    const person  = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonHandler =  () => {
    const showPersonsFlag = this.state.showPersons;
    this.setState({
      showPersons: !showPersonsFlag
    });
  }

  deletePersonHandler = (personIndex) => {
    const personData = [...this.state.persons];
    personData.splice(personIndex, 1);
    this.setState({
      persons: personData
    });
  }

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] | getDerivedStateFromProps", props);
    return state;
  }

  componentWillMount() {
    console.log("[App.js] | Component Will Mount...")
  }

  componentDidMount(props) {
    console.log("[App.js] | Component Did Mount...")
  }

  

  render () {
    
    console.log("[App.js] | Renderringgggg.....");

    let displayPersons = null;

    if(this.state.showPersons){
      displayPersons = (<div>
      
        <ErrorBoundary ><Persons 
        persons={this.state.persons}
        cliecked={this.deletePersonHandler}
        changed={this.nameChangedHandler}
        /></ErrorBoundary>
     
    </div>);
    
    }
    let rnd = Math.random();
    if(rnd > 0.8) {
      // throw new Error('Something went wrong');
    }
    return (
      <div className={Classes.App}>
        <Cockpit 
        title={this.props.appTitle}
        persons={this.state.persons}
        clicked={this.togglePersonHandler}/>
        {displayPersons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App2;
