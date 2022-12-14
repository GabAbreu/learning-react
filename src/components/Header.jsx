export default function Header(){
    return(
        <header className="flex justify-center h-[65px] text-white p-[20px] bg-purple-600">
                <img className="h-full mr-[6px] -scale-x-[1]" src="https://upload.wikimedia.org/wikipedia/pt/thumb/7/73/Trollface.png/220px-Trollface.png" alt="trollface" />
                <h2 className="mr-auto text-xl">Meme Generator</h2>
                <h2 className="text-xs">React Course - Project 3</h2>
        </header>
    )
}