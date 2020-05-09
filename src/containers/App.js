import React, {useState} from "react";
import "../assets/css/App.module.css";
import Person from './components/Person/Person';

const App = () =>{
  const [personState, setPersonState] = useState({
    persons: [
      {name:"Saravanan", age:28},
      {name:"Mythili", age:25},
      {name:"Vijayaguru", age:31}
    ]
  });

  const [otherState, setOtherState] = useState({"otherState": "Some other state"});

  const switchNameHandler = (newName) => {
    setPersonState({
      persons: [
        {name: newName, age:29},
        {name:"Mythili", age:25},
        {name:"Vijayaguru", age:31}
      ]
    })
   };

  return (
    <div className="App">
      <h1>Hello React</h1>
      <h2>Welcome Aboard!!</h2>
      <Person 
      name = {personState.persons[0].name} 
      age={personState.persons[0].age} 
      click={() => switchNameHandler('Vignesh')}/>

      <Person  
      name = {personState.persons[1].name} 
      age={personState.persons[1].age}/>

      <Person  
      name = {personState.persons[2].name} 
      age={personState.persons[2].age}/>

      <button onClick={switchNameHandler.bind(this, 'vigneswaran')}>Change Names</button>
    </div>
  )
}

export default App;


// switchNameHandler = () => {
//   this.setState({
//     persons: [
//       {name:"Saravanan", age:28},
//       {name:"Mythili", age:25},
//       {name:"Vijayaguru", age:31}
//     ]
//   })
//  };

//  state = {
//   persons: [
//     {name:"Saravanamani", age:29},
//     {name:"Mythili", age:25},
//     {name:"Vijayaguru", age:31}
//   ],
//   "OtherState": "State aftfeste only if triggers"
// }