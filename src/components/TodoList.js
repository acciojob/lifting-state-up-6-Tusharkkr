import React, { useState } from "react";

let TodoList = ({ todos, setTodos }) => {

    // let [render, setRender] = useState(false)

    function handleComplete(value) {
        
        // value.completed = true

        const updatedTodos = todos.map((item) =>
            item.id === value.id ? { ...item, completed: true } : item
        );

        setTodos(updatedTodos)
        console.log(todos)
    }

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {todos.map((value) => {
                    { console.log(value.completed) }
                    return (<li>{value.text} {!value.completed && <button onClick={() => handleComplete(value)}>Complete</button>}</li>)
                })}
            </ul>
        </div>
    )
}

export default TodoList