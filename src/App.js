import React from "react"

import "./style.css"

import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Data from "./data"

export default function App(){
    const card = Data.map( item =>{
        return (
            <Card 
                key = {item.id}
                {...item}
            />
        )
    })
    return(
        <>
            
            <Navbar />
            <div className="container">
                {card}
            </div>
        </>
    )
}