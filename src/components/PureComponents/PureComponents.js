import { useState } from "react"
import CounterComponents from "./Counter"
import HeadingComponents from "./Heading"





const PureComponents = () => {
    const [count, setCount] = useState(0)
    return (
        <>
            <h1>Pure Component</h1>
            <button onClick={() => { setCount(count + 10) }} >increment by click {count}</button>
            <button onClick={() => { setCount(count - 5) }} >decrement by click{count}</button>

            <HeadingComponents />
            <CounterComponents />
        </>
    )
}
export default PureComponents