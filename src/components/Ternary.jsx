import { useState } from "react"

export default function Ternary(){

    const [isGoingOut, setIsGoingOut] = useState(true)

    function handleClick(){
        setIsGoingOut( prevState => !prevState )
    }


    return(
        <div className="mt-8 flex flex-col text-center items-center bg-gray-600 w-[200px] p-4">
            <h1 className="text-white">Do I fell like going out tonight?</h1>
            <h2 onClick={handleClick} className="bg-green-200 mt-4 p-4 rounded-full ">{isGoingOut ? "Yes" : "No"}</h2>
        </div>
    )
}