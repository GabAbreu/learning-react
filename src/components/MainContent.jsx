import { useState } from "react"
import memesData from "../memesData"
export default function MainContent(){

    const [memeImage, setMemeImage] = useState("")
    function getMemeImage(){
        const memesArray = memesData.data.memes
        const random = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[random].url)
    }
    return(
        <main className="p-9 flex flex-col">
            <div className="grid grid-cols-2 grid-rows-2 gap-4">
                <input className="rounded border-[1px] border-solid border-[#D5D4D8] indent-1" type="text" placeholder="Top text" />
                <input className="rounded border-[1px] border-solid border-[#D5D4D8] indent-1" type="text" placeholder="Bottom text" />
                <button className="rounded col-span-2 text-white border-0 bg-purple-600 cursor-pointer" onClick={getMemeImage}>Get a new meme image🖼️</button>
            </div>
            <img className="rounded mt-6" src={memeImage} alt="shutUpAndTakeMyMoney" />
        </main>
    )
}