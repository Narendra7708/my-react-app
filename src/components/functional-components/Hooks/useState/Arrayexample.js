import { useState } from "react"


function Arrayexample(){
    let companyarr=["Tcs","Hcl","Global data","Ntt data"]

  const [Company,setCompany]=useState(companyarr)

  const companyhandler=()=>{
    let a="narendra"
    setCompany([...Company,a])
  }

  const handlerDelete=()=>{

     
    //const newArry=Company.slice(0,-1)
    let newArry=[...Company];
    newArry.pop()

    setCompany(newArry)

  }

  


    return(
        <>
        <h1 style={{color:"red"}}>Array example for useState</h1>
        <h2>Length of array{Company.length}</h2>
        <button onClick={companyhandler}>click on add </button>

        <button onClick={()=>handlerDelete()}>delete</button>
        
        <ol>
        {
            Company.map((company)=>{
                return(
                    <>
                    <li>{company}</li>
              
                 
                    </>
                )
            })
        }
        </ol>
        </>
    )
}
export default Arrayexample