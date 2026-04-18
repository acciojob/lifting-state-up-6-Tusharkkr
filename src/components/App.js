
import React from "react";
import './../styles/App.css';
import TodoList from "./Todolist";


const App = () => {

  const todos = [
  { id: 1, text: "Learn React", completed: false },
  { id: 2, text: "Build a React app", completed: false },
  { id: 3, text: "Deploy the React App", completed: false }
];

  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList 
      todos={todos}
      />
    </div>
  )
}

export default App
