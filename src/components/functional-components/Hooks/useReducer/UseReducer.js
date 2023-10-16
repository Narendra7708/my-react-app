import { useReducer, useState } from "react"


const reducerFuncton = (state, action) => {
    switch (action.type) {
        case "INCREMENT_AGE":
            return {
                name: "nari",
                age: state.age + 10
            }
        case "DECREMENT_AGE":
            return {
                name: "nari",
                age: state.age - 10
            }
            case "CHANGE_NAME":
                return{
                    name:action.updaterName,
                    age:state.age
                }
        default:
            return state
    }

}
const UseReducer = () => {
    const intialstate = {
        name: "nari", age: 22
    }
    const[name,setName]=useState()
    const [currentState, dispatchmethod] = useReducer(reducerFuncton, intialstate)
    const incrementby10 = () => {
        dispatchmethod({ type: "INCREMENT_AGE" })
    }
    const decrementby10 = () => {
        dispatchmethod({ type: "DECREMENT_AGE" })
    }
    const changename=()=>{
        dispatchmethod({
            type:"CHANGE_NAME",updaterName:name
        })
    }
    return (
        <>
            <h1>UseReducer example</h1>
            <h1>{currentState.name}</h1>
            <h1>{currentState.age}</h1>
            <input value={name} onChange={(event)=>setName(event.target.value)} />
            <button onClick={incrementby10}>Increment age by10</button>
            <button onClick={decrementby10}>decrement age by10</button>
            <button onClick={changename}>Change name</button>


        </>
    )
}
export default UseReducer