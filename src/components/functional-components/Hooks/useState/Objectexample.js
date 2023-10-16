import { useState } from "react"



function Objectexample(){
    let object={
        id:1,
        name:"nari"
    }
    const[Obj,setObj]=useState(object)

    const objhandler=()=>{
        setObj({...Obj,id:2,name:"nari2"})
    }

    return(
        <>
        <h1>Objectexample</h1>
        <h2>{Obj.id}</h2>
        <h2>{Obj.name}</h2>
        <button onClick={objhandler}>click</button>

        </>
    )
}
export default Objectexample