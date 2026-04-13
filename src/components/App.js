
import React from "react";
import './../styles/App.css';
import TodoList from "./Todolist";


const App = () => {

  let arr = ['Learn React', 'Build a React app', 'Deploy the React App']

  function handleComplete(){
        
  }

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList 
      arr={arr}
      handleComplete={handleComplete}
      />
    </div>
  )
}

export default App
