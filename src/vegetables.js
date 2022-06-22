function Vegetables({Vegetables,name,totalCost,firstName,secondName,lastName,farmProduct,names}){


   
    return(
        <div>
            <h1>Vegetables</h1>
            {name}
        
           <h2>firstName   {firstName}</h2>
           <h2>secondName  {secondName}</h2>
           <h1>Welcome : {<li>{firstName}</li>}{<li>{secondName}</li>} {<li>{lastName}</li>} {names.map((l)=><li>{l}</li>)}</h1>
           <h1>FRUITS & VEGETABLES</h1>
         
      {console.log(farmProduct)}
            {Vegetables.map((p)=><li>{p}</li>)}  {farmProduct.map((k)=><li>{k}</li>)}
            const[help,setHelp]=useState(false)

    
        </div>
    )
}
export default Vegetables
