import { useState } from "react"
import styled from "styled-components"
const Business = () =>{
    const [myNum, setMyNum] = useState(0)

    const increaseNum = () =>{
        setMyNum(myNum + 1)
    } 
    const decreaseNum = () =>{
     setMyNum(myNum - 1)
    } 
    return(
            
        <div>
            <h1>React Hooks</h1>
            <h2>{myNum}</h2>
            <h1>This is the Business page</h1>
            <Holder>
            <button onClick={decreaseNum}>Subtract</button>
            <h1>{myNum}</h1>
            <button onClick={increaseNum}>Add</button>
            </Holder>
            
        </div>
    )
}

export default Business

const Holder = styled.div `
    display: flex;
`