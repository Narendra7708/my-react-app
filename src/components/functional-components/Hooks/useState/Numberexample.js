import { useState } from "react"



function Numberexample(){

    
const[Count , setCount]=useState(0);

const Increment=()=>{
    setCount(Count+2)
}
const Decrement=()=>{
    setCount(Count-1)
}
const Reset=()=>{
    setCount(0)
}

    return(
        <>
        <h1>Numberexample useState</h1>
        <h1>{Count}</h1>
        <button onClick={Increment} >increment</button>
        <button onClick={Decrement}>decrement</button>
        <button onClick={Reset}>Reset</button>

        </>
    )
}
export default Numberexample