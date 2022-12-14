import { useState } from "react"
export default function Counter(){

    const [count, setCount] = useState(0)

    function increaseOne(){
        setCount(prevCount => {
            if(prevCount >= 10){
                window.alert(`Limite máximo de ${prevCount} itens`)
                return(prevCount)
            }else{
                return prevCount+1
            }
        })
    }
    function decreaseOne(){
        setCount(prevCount => {
            if(prevCount <= 0){
                window.alert(`Limite mínimo de ${prevCount} itens`)
                return(prevCount)
            }else{
                return(prevCount-1)
            }
        })
    }

    return(
        <div className="flex gap-2 bg-gray-700 p-8">
            <button onClick={decreaseOne} className="rounded-full border-2 p-4 font-bold text-xl bg-gray-500 text-white hover:bg-gray-700">-</button>
            <div>
                <h1 className="rounded-full border-2 p-4 font-bold text-xl bg-white text-black ">{count}</h1>
            </div>
            <button onClick={increaseOne} className="rounded-full border-2 p-4 font-bold text-xl bg-gray-500 text-white hover:bg-gray-700">+</button>
        </div>
    )
}