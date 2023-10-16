import { useState } from "react"
import"./Externalcss.css"


function Arrayobjects() {

    let arr = [{ id: 1, name: "nari1", age: 22,designation:"React developer" },
    { id: 2, name: "nari2", age: 23 ,designation:"java developer"},
    { id: 3, name: "nari3", age: 24 ,designation:"frontend developer"}
    ]

    const [Object, setObject] = useState(arr)

    const objecthandler=()=>{
        const array1={id:4,name:"nari4",age:25,designation:"Database"};
        setObject([...Object,array1])
    }
    const objecthandler1=()=>{
        setObject(Object.slice(0,-1))
    }

    return (
        <>
            <h1 className="nari">Array-object</h1>
            <table className="table">

                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Designation</th>

                </tr>
                {
                    Object.map((arr1) => {
                        return (
                            <tr>
                                <td>{arr1.id}</td>
                                <td>{arr1.name}</td>
                                <td>{arr1.age}</td>
                                <td>{arr1.designation}</td>

  
                            </tr>
                        )
                    })
                }
                <button onClick={objecthandler}>click on add </button>
                <button onClick={objecthandler1}>click on Delete </button>

            </table>
        </>
    )
}
export default Arrayobjects