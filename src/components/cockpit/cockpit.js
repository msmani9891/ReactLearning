import React, { useEffect } from 'react';
import Classes from './cockpit.module.css';

const Cockpit = (props) => {

    useEffect( () => {
        console.log("Inside UseEffect funtion Hooks");

        setTimeout(() => {
            console.log("Inside timeout user effect 1");
        }, 3000);

        return () => {
            console.log("Cockpit Removed 1st use Effect");
        }
    }, [props.persons]);


    useEffect(() => {
        console.log("Inside 2nd useEffect");
        alert(2);
    }, [])
    let classesArr = [Classes.bold];
    if(props.personsLength > 1){
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

export default React.memo(Cockpit);