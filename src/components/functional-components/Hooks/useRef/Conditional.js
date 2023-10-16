import { useState } from "react"
import"./ex.css"




const Conditional=()=>{
const [username,setUserName]=useState("")
const [password,setPassword]=useState('')
const[table,setTable]=useState([]);

    const hnadlersubmit=(event)=>{
        event.preventDefault();
        const empolyee={
            Username:username,
            password:password
        }
        
        setTable([...table,empolyee])
        console.log(table)

    }

    const usernamevalidation=(event)=>{
        setUserName(event.target.value);
        if(username.length>10){
            alert("username must be less then 10")
        }
    }

    const passwordvalidation=(event)=>{
        setPassword(event.target.value);
        if(password.length>8){
            alert("password must be lessthen 8")
        }
    }
    return(
        <>
        <form onSubmit={hnadlersubmit}>
            <label>UserName</label>
            <input type={"text"} value={username} onChange={(event)=>usernamevalidation(event)}/>
            <label>Password</label>
            <input type={"password"} value={password} onChange={(event)=>passwordvalidation(event)}/>
            <input type={"submit"}/>
        <table className="tabl">
            <tr>
                <th>UserName</th>
                <th>Password</th>
            </tr>
            {
              table.map((em)=>{
            return(
                <tr>
                <td>{em.Username}</td>
                <td>{em.password}</td>
            </tr>
            )
              })  
            }
           
        </table>
        </form>
        </>
    )
}
export default Conditional