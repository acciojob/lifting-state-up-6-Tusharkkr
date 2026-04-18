
import React, { useState } from "react";
import './../styles/App.css';
import TodoList from "./Todolist";


const App = () => {

  const [todos, setTodos] = useState([
    { id: 0, text: "Learn React", completed: false },
    { id: 1, text: "Build a React app", completed: false },
    { id: 2, text: "Deploy the React App", completed: false }
  ])
console.log('hello')
  return (
    <div>
      <h1>Parent Component</h1>
      <TodoList
        todos={todos}
        setTodos={setTodos}
      />
    </div>
  )
}

export default App
