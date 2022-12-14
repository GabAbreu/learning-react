import { useState } from "react"
export default function State(){
    const [isImportant, setIsImportant] = useState("Yes")
    
    function handleClick(){
        if(isImportant == "Yes"){
            setIsImportant("No")
        }else{
            setIsImportant("Yes")
        }
    }

    return(
        <div onClick={handleClick} className="p-4 flex justify-center bg-red-400">
            <p>Is state important to know?</p>
            <h1 className="font-bold text-xl">{isImportant}</h1>
        </div>
    )
}