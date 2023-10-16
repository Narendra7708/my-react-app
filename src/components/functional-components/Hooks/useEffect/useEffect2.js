import axios from "axios"
import { useEffect, useState } from "react"
import"../useRef/tasks/ex1.css"




const UseEffect2=()=>{
    const[count,setCount]=useState(0)
    const[data,setdata]=useState({})
    const[input,setInput]=useState('')
    useEffect(
        ()=>{
            axios.get(`https://jsonplaceholder.typicode.com/photos/${input}`)
            .then(res=>setdata(res.data))

        },
    )
    const handler=(event)=>{
        setInput(event.target.value)
    }

    return(
        <>
        <h1>useEffect2 Example</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1 )} >click on increse count</button>
        <input type={"number"} value={input} onChange={(event)=>handler(event)}/>
        <li>AlbumId:{data.albumId}</li>
        <li>id:{data.id}</li>
        <li >Title:{data.title}</li>
        
        <table className="table">
        {
            data.length>0 && data.map((item)=>{
                return(
                    <div key={item.title}>
                       
                        <tr>
                    <td>{item.albumId}</td>
                    <td>{item.id}</td>
                    <td style={{width:"200px"}}>{item.title}</td>
                    <td><img src={item.url} width={250} height={250}/></td>
                    <td><img src={item.thumbnailUrl} width={250} height={250}/></td>
                    </tr>
                    </div>
                )
            })
        }
        </table>
        </>
    )
}
export default UseEffect2