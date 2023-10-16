import { useState } from "react"
import ChildComp from "./Child"



const UseMemo = () => {
    const[text,setText]=useState("Good Morning")
    const[count,setCount]=useState(0)
    const[todo,setTodo]=useState([])

    const handler=()=>{
        setText("Good Evening")
    }
    const TodoHadler=()=>{
console.log("narenra")
        setTodo([...todo,`newTodo${todo.length+1}`])
    }
    return (
        <>
        <h1>UseMemo()</h1>
        <ChildComp text={text}/>
    
        <h1>count:{count}</h1>
       
        <button onClick={()=>setCount(count+1)}>Increment in count</button>
        <button onClick={handler}>change text</button>
        <button onClick={TodoHadler}>Add Todo</button>
        
        {
            todo.map((eachtodo)=>{
                return(
                    <div key={eachtodo.id}>
                    <h1>{eachtodo}</h1>
                    </div>
                )
            })
        }
        
        </>
    )
}
export default UseMemo