import axios from "axios"
import { useEffect, useState } from "react"
import "./ex2.css"





const ApiTable = () => {
    const [data, setdata] = useState([])
    useEffect(
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/photos`)
                .then(res => setdata(res.data))

        }, []
    )
    return (
        <>
            {/* <input type={"number"} value={input} onClick={()=>setInput}/> */}
            <table className="table">
                {
                    data.length > 0 && data.map((item) => {
                        return (
                            <div key={item.title}>

                                <tr>
                                    <td>{item.albumId}</td>
                                    <td>{item.id}</td>
                                    <td style={{ width: "200px" }}>{item.title}</td>
                                    <td><img src={item.url} width={250} height={250} /></td>
                                    <td><img src={item.thumbnailUrl} width={250} height={250} /></td>
                                </tr>
                            </div>
                        )
                    })
                }
            </table>
        </>
    )
}
export default ApiTable