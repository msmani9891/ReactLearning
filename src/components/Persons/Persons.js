import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    shouldComponentUpdate(nextProps, nextState){
      console.log("Indise component Should Update", nextProps);
      console.log("Indise component Should Update", nextState);
      if(nextProps.persons !== this.props.persons){
        return true;
      }
      else {
        return false;
      }      
    }
    
    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log("Inside getSnapshotBeforeUpdate", prevProps);
      console.log("Inside getSnapshotBeforeUpdate", prevState);
      return true;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
      console.log("ComponentDidUpdate inside", prevProps);
      console.log("componentDidUpdate inside", prevState);
      console.log("componentDidUpdate indise", snapshot);      
    }

    render() {
      console.log("[Person.js] | Rendering indise Persons!!!!");  
      return this.props.persons.map((person, index) => {
              return <Person 
              name={person.name} 
              key={person.id}
              age={person.age} 
              click={() => this.props.cliecked(index)}
              change= {(event) => this.props.changed(event, person.id)}
              />
      })
    }
}

export default Persons;