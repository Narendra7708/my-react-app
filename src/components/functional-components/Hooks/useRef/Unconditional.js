import { useRef } from "react"




const Unconditional=()=>{

    const inputref=useRef()
    const passwordref=useRef()



const hnadlersubmit=(event)=>{
    event.preventDefault()
    const username=inputref.current.value;
    const password=passwordref.current.value;

    if(username.length<3 && password.length<3){
        alert("username && password must be more 5")
    }else{
        alert("form submited")
    }
//alert(inputref.current.value+passwordref.current.value)
}

    return(
        <>
        <form onSubmit={hnadlersubmit}>
            <>
            <label>UserName:</label>
        <input type={"text"} placeholder={"UserName"} ref={inputref}/>
        </>
        <>
        <label>Password</label>
        <input type={"password"} placeholder={"password"} ref={passwordref}/>
        </>
        <>
        <input type={"submit"}/>
        </>
        </form>
        </>
    )
}
export default Unconditional