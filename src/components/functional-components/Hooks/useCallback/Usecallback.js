import { useState } from "react"
import TodoListingComp from "./ChildTodo"




const Usecallback=()=>{
    const[count,setCount]=useState(0)
    return(
        <>
        <h1>Narendra</h1>
        <TodoListingComp/>
        
        </>
    )
}
export default Usecallback