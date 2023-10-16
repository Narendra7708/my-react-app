import { useState } from "react"
import"./ex1.css"
import {  Card, CardBody, CardText, CardTitle } from "react-bootstrap";

const EmpolyeeCard=()=>{
    const[EmpolyeeId,setEmpolyeeid]=useState('')
    const[EmpolyeeName,setEmpolyeeName]=useState('')
    const[Age,setAge]=useState('')
    const[MobileN0,setMobileN0]=useState('')
    const[Salary,setSalary]=useState('')
    const[Designation,setDesignation]=useState('')

    const[cardData,setCardData]=useState([])

    const formhandler=(event)=>{
        event.preventDefault()

        const empolyee={
            empolyeeId:EmpolyeeId,
            empolyeeName:EmpolyeeName,
            age:Age,
            mobileN0:MobileN0,
            salary:Salary,
            designation:Designation
        }
        setCardData([...cardData,empolyee])
        setEmpolyeeid('')
        setEmpolyeeName('')
        setAge('')
        setMobileN0('')
        setSalary('')
        setDesignation('')


    }
    const empolyeeidhandler=(event)=>{
        setEmpolyeeid(event.target.value)
    }
    const empolyeehanlder=(event)=>{
        setEmpolyeeName(event.target.value)
        //console.log(event.target.value)
        // if(EmpolyeeName.length>10){
        //     alert()
        // }
    }
    const agehandler=(event)=>{
        setAge(event.target.value)
        console.log(event.target.value)
    }
    const mobilehanlder=(event)=>{
        setMobileN0(event.target.value)
        console.log(event.target.value)
    }
    const salaryhandler=(event)=>{
        setSalary(event.target.value)
        console.log(event.target.value)
    }
    const designationhandler=(event)=>{
        setDesignation(event.target.value)
        console.log(event.target.value)
    }
    return(
        <>
        <form id="div" onSubmit={formhandler} >
            <h1>EmpolyeeDetalis</h1>
            <div>
                <label>EmpolyeeID:</label>
                <input type={"Number"} value={EmpolyeeId} onChange={(event)=>{empolyeeidhandler(event)}}/>
            </div>
            <div>
            <label>EmpolyeeName:</label>
            <input type={"text"} value={EmpolyeeName} onChange={(event)=>empolyeehanlder(event)}/>
            </div>
            <div>
            <label>Age:</label>
            <input type={"number"} value={Age} onChange={(event)=>agehandler(event)}/>
            </div>
            <div>
            <label>MobileN0:</label>
            <input type={"number"} value={MobileN0} onChange={(event)=>mobilehanlder(event)}/>
            </div>
            <div>
            <label>Salary:</label>
            <input type={"Number"} value={Salary} onChange={(event)=>salaryhandler(event)}/>
            </div>
            <div>
            <label>Designation:</label>
            <select value={Designation} onChange={(event)=>designationhandler(event)}>
                <option></option>
                <option>React Developer</option>
                <option>Java Developer</option>
                <option>Python Developer</option>
                <option>Devops</option>
                <option>Cloud computing</option>
                <option>Artificial intelligence</option>
                <option>Robotics</option>
            </select>
            </div>
            <div>
                <input type={"submit"}/>
            </div>
            {
                cardData.map((empolyee)=>{
                    return(
                        <Card className="card" >
                                <CardBody>
                                    <CardTitle className="CardTitle"><h1>EmpolyeeDetalis</h1></CardTitle>
                                    <CardText className="CardText">
                                       <ul>
                                        <li>EmpolyeeId:{empolyee.empolyeeId}</li>
                                        <li>EmpolyeeName:{empolyee.empolyeeName}</li>
                                        <li>Age:{empolyee.age}</li>
                                        <li>Salary:{empolyee.salary}</li>
                                        <li>Designation:{empolyee.designation}</li>

                                       </ul>
                                    </CardText>
                                    
                                </CardBody>
                               
                            </Card>
                    )
                })
            }
            </form>
        </>
    )
}
export default EmpolyeeCard