import React from "react"
import { useState } from "react"




const CounterComponents=()=>{
    console.log("i am form counter components")
    const[count,setCount]=useState(0)
    return(
        <>
        <h1>Counter components</h1>
        <h1>{count}</h1>
        <center>
        <button onClick={()=>{setCount(count+10)}} >increment by 10</button>
        <button onClick={()=>{setCount(count-10)}} >decrement by 10</button>
        </center>

        </>
    )
}
export default React.memo(CounterComponents)