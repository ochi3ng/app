import { useState } from "react"
function Hello(){
    const[isRed,setRed]=useState(false)
    const[count,setCount]=useState(0)
    const[enteredValue,setValue]=useState(0)
    const increment=()=>{
        setCount(count + enteredValue)

    }
function decrement(){
    setCount(count - enteredValue)
    }
function getName(e){
    setValue(parseInt(e.target.value))

}
    return(
        <div>
               <h1>counter {count}</h1>
        <button onClick={increment}>increment</button>
     <button onClick={decrement}>decrement</button>
     <input onChange={getName}/>
      
        </div>
    )
    
}
export default Hello