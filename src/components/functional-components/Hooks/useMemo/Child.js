import { useMemo } from "react"




const ChildComp=({text})=>{
    function ConvertUpperCase(){
        console.log("ConvertUpperCase")
        return text.toUpperCase()
    }


    const upperCase=useMemo(
        ()=>{
            console.log("iam usememo")
            return  text.toUpperCase()
        },[text]
    )

    return(
        <>
        <h1>{ConvertUpperCase()}</h1>
        <h1>Hi Friends {upperCase} </h1>
        
        </>
    )
}
export default ChildComp