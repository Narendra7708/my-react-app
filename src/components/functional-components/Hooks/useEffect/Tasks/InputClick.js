import axios from "axios"
import { useEffect, useState } from "react"



const Inputclick = () => {
    const [Item, setItem] = useState({})
    const [Id, setId] = useState('')


    useEffect(
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/photos/${Id}`)
                .then(res => setItem(res.data))



        }, [Id]
    )
    const handler = (event) => {
        setId(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <h1> Click the id show in user interface</h1>
            <input type={"number"} value={Id} onChange={(event) => handler(event)} />
            <h2>{Item.albumId}</h2>
            <h2>{Item.id}</h2>
            <h2>{Item.title}</h2>
            <img src={Item.url} />
            <img src={Item.thumbnailUrl} />

        </>
    )
}
export default Inputclick