
import React from "react";
import './../styles/App.css';
import TodoList from "./Todolist";


const App = () => {

  let arr = [
    {name : 'Learn React' ,status : false},
    {name : 'Build a React app' ,status : false},
    {name : 'Deploy the React App' ,status : false}
  ]



  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList 
      arr={arr}
      />
    </div>
  )
}

export default App
