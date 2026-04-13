import React, { useState } from "react";

let Child = ({arr}) => {
   

    return (
        <div>
            <h2>Child Component</h2>
            <ul>
             {arr.map(value =>(
                <li> {value} <button onClick={(e) => e.target.innerText = 'Completed'}> Complete </button></li>
             ))}
             </ul>
        </div>
    )
}

export default Child