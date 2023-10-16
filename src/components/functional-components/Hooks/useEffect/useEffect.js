import { useEffect, useState } from "react"




const UseEffect=()=>{
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[count2,setCount2]=useState(0)


useEffect(
    ()=>{
        document.title=`Count${count+count1}`
     console.log("useEffect")
    },
)
    return(
        <>
        <h1>useEffect example</h1>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>click on increse count</button>
        <h1>{count1}</h1>
        <button onClick={()=>setCount1(count1+2)}>click on increse count1</button>
        <h1>{count2}</h1>
        <button onClick={()=>setCount2(count2+3)}>click on increse count2</button>



        </>
    )
}
export default UseEffect