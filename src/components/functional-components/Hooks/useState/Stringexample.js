import { useState } from "react"

function Stringexample(){
    const [Login, setLogin]=useState(false)
    const [Message,setMessage]=useState("please Login to access the application")

    const loginhandler=()=>{
        setLogin(!Login)
    }
    const Loginhandler=()=>{
        setMessage("welcomeUser")
    }

    return(
        <>
        <h1>Stringexample for useState</h1>
        {
            Login?
            <h1 style={{color:"green"}}>{Message}</h1>:
            //<h1 style={{color:"red"}}>{Message}</h1>
            <h1 style={{color:"red"}}>please Login to access the application</h1>


        }
        

        <button onClick={loginhandler} >{Login?"Logout":"Login"}</button>
        </>
    )
}
export default Stringexample