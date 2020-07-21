import React from 'react';
import './App.css';
import {useState} from 'react';

function App() {
  const [task, SetTask]=useState("")

  
  return (
    <div className="App">
        <input placeholder="Write your task" value={task} onChange={(e)=>SetTask(e.target.task)}></input>
        <button type="submit">Add task</button>
    
    </div>
  );
}

export default App;
