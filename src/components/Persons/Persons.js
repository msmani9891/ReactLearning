import React from 'react';
import Person from './Person/Person';

const persons = (props) => {
  console.log("[Person.js] | Rendering indise Persons!!!!");
  return props.persons.map((person, index) => {
        return <Person 
        name={person.name} 
        key={person.id}
        age={person.age} 
        click={() => props.cliecked(index)}
        change= {(event) => props.changed(event, person.id)}
        />


}) };

export default persons;