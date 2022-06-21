import { useState } from "react"

function Footer(){
    const[name,setName]=useState("brain")
const sayTypeHere=()=>{
    // console.log("sayTypeHere")
    setName("john")
}
function getName(e){
setName(e.target.value)
}
return(
<div>
    <h1>My Name Is {name}</h1>
    <button onClick={sayTypeHere}>TypeHere</button>
    <input onChange={getName}/>
</div>
)
}
export default Footer