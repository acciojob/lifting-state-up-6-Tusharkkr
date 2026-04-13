import React, { useState } from "react";
import Child from "./Child";



let Parent = () => {

    // let [arr,setArr] = useState(arr)
    let arr = ['Learn React', 'Build a React app', 'Deploy the React App']
    return (
        <div>
            <h1>Parent Component</h1>
            <Child
            arr={arr}
            />
        </div>
    )
}

export default Parent