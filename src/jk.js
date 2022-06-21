import { useState } from "react"
function SayHae(){
    const[hae,setHae]=useState(false)
    const[count,setCount]=useState(0) 
    const[enteredValue,setValue]=useState(0)
    const[number,setNumber]=useState(0)
    function add(){
        setCount(number + enteredValue)
   
    }
    function AddValue2(e){
        setNumber(parseInt(e.target.value))
    }
    function AddValue1 (e){
        setValue(parseInt(e.target.value))
    }
    function Subscribe(){
        setCount(number-enteredValue)
    }
    function Multiply(){
        setCount(number * enteredValue)
    }
    const Division=()=>{
        setCount(number / enteredValue)
    }
    return(
        <div>
            <h1>my react project {count}</h1>
            <button onClick={add}>add</button>
            <button onClick={Subscribe}>Subscribe</button> 
            <button onClick={Multiply}>Multiply</button>
            <button onClick={Division}>Division</button>
            <input onChange={AddValue1}/>
            <input onChange={AddValue2}/> 
        </div>
    )
}
export default SayHae
