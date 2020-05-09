import React from 'react';
import Classes from './cockpit.module.css';

const cockpit = (props) => {
    let classesArr = [Classes.bold];
    if(props.persons.length > 1){
        classesArr.push(Classes.red);
    } else {
        classesArr.push(Classes.green);
    }
    classesArr = classesArr.join(' ');
    return (
        <div>
            <h1>{props.title}</h1>
            <p className={classesArr}>This is really working!</p>
            <button className={Classes.btnStyle}
            onClick={props.clicked}>Switch Name</button>
        </div>
    )
}

export default cockpit;