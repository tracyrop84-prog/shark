import { useState,useEffect } from "react"


function NameTracker(){
const [name,setName]=useState("")
function handleChange(e){
   
setName(e.target.value)
}
useEffect(()=>{
    console.log(`name is:${name}`)
},[name])
return(
    <div>
        <input value={name} onChange={handleChange} />

        <p>{name}</p>
    </div>
)
}
export default NameTracker