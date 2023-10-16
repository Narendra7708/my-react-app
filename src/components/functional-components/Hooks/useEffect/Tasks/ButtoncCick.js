import axios from "axios"
import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"





const Buttonclick = () => {
    const [item, setItem] = useState({})
    const [Button, setButton] = useState('')
    const [Id, setId] = useState('')

    const handlerclick = () => {
        setButton(Id)
    }

    useEffect(
        () => {
            axios.get(`https://jsonplaceholder.typicode.com/users/${Button}`)
                .then(res => { console.log(res.data); setItem(res.data) })
        }, [Button]
    )
    const handler = (event) => {
        setId(event.target.value)
        console.log(event.target.value)
    }

    return (
        <>
            <h1>Buttonclick the id show in user interface</h1>
            <input type="text" value={Id} onChange={(event) => handler(event)} />
            <button type="button" onClick={handlerclick} >click me</button>
            <p>{item.id}</p>
            <p>{item.name}</p>
            <p>{item.username}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p>
            <p>{item.website}</p>

        </>
    )
}
export default Buttonclick