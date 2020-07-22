import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [mytask, SetMytask]=useState("")
  const [tasks, SetTasks]=useState([])
 
  const handleChange=(e)=>{
    e.preventDefault();
    SetMytask(e.target.value)
  }
  const addTasks=(e)=>{
    e.preventDefault();
    SetTasks([...tasks,{name:mytask, key:tasks.length}]);
    SetMytask("")
  
  };
  const deleteTasks=(key)=>{
    const newtasks=tasks.filter(task=>task.key!==key);
    SetTasks({tasks:newtasks})
  }
 

  
  return (
    <div className="App">
      <form id="to-do-form" onSubmit={addTasks}>
        <input placeholder="Enter text" type="text" name="task" value={mytask} onChange={handleChange}></input>
        <button id="add-button" type="submit">Add task</button>
      </form>
      <ul className="unlist">
        {tasks.map((task)=>
            <li className="list" key={task.key}>{task.name}
              <button id="delete-button" onClick={deleteTasks}> X </button>
            </li>
        
        
        
        )}
      </ul>
    </div>
  );
}

export default App;
