import { useState } from "react";
function Add (){
const[help,setHelp]=useState(false)
const[number,setNumber]=useState(0)
const[red,setRed]=useState(0)
const[blue,setBlue]=useState(0)
const[black,setBlack]=useState(0)
function Addition(){
    setNumber(blue+red +black)
}
function getValue1(e){
    setRed(parseInt(e.target.value))
}
function getValue2(e){
    setBlue(parseInt(e.target.value))
}
function getValue3(e){
    setBlack(parseInt(e.target.value))
}
function subtraction(){
    setNumber(blue - red -black)
}
function Division(){
    setNumber(blue / red /black)
}
function Multiplication(){
    setNumber(blue * red * black)
}

return(
    <div>
        <h1>header {number}</h1> 
        <button onClick={Addition}>+</button>
        <button onClick={subtraction}>-</button>
       
        <input onChange={getValue2}/>
        <input onChange={getValue1}/>
        <input onChange={getValue3}/>
        <button onClick={Multiplication}>*</button>
        <button onClick={ Division}>/</button>
    </div>
)
}
export default Add