import React, { useState } from "react";

let TodoList = ({arr}) => {

    function handleComplete(e){
        e.target.remove()
    }

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
             {arr.map(value =>(
                <li> {value} <button onClick={handleComplete}> Complete </button></li>
             ))}
             </ul>
        </div>
    )
}

export default TodoList