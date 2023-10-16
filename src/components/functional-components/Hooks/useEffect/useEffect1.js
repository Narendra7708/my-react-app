import { useEffect, useState } from "react"



const UseEffect1=()=>{

    const[Timer,setTimer]=useState(0)
    useEffect(
        ()=>{
            const interval=setInterval(()=>{
                setTimer(Timer+1)
            },1000)
            return()=>{
                clearInterval(interval)
            }

        },[Timer]
    )
    return(
        <>
        <h1>UseEffect1 example</h1>
        <h1>{Timer}</h1>
        </>
    )
}
export default UseEffect1