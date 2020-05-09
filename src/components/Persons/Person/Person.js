import React from 'react';
import './Person.css';

const person = (props) => {
    return (
    <div className="person">
    <p onClick={props.click}>I am <span>{props.name}</span>, am {props.age} years old;</p>
    <input type="text" onChange={props.change} value={props.name}/> 
    </div>);

}

export default person;