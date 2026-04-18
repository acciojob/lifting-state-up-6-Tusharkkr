import React, { useState } from "react";

let TodoList = ({arr}) => {

    function handleComplete(e){
        e.status = true
        console.log(e.status)
        e.target.remove()
        
    }

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
                {arr.map((value,index) =>{
                    {console.log(value.status,index)}
                    return (<li>{value.name} <button onClick={(e)=>handleComplete(e)}>Complete</button></li>)
})}
            </ul>
        </div>
    )
}

export default TodoList