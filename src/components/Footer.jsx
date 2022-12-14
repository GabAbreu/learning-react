export default function Footer(){
    const thingsArray = ["Thing 1", "Thing 2"]
    const load = thingsArray.map( thing => <p key={thing}>{thing}</p>)

    function AddThing(){
        thingsArray.push(`Thing ${thingsArray.length+1}` )
        console.log(thingsArray)
    }
                    
    return(
        <div className="flex flex-col">
            <button onClick={AddThing} className="border-2 p-2 border-solid rounded hover:bg-red-700 border-black bg-red-500">Add Item</button>
            {load}
        </div>
    )
}