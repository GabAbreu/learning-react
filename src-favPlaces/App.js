import React from "react"

import Card from "./components/Card"
import Data from "./components/Data"
import Navbar from "./components/Navbar"

import "./style.css"

export default function App(){
    const cards = Data.map( item => {
        return(
            <Card 
                key = {item.id}
                {...item}
            />
        )
    })
    return(
        <>
            <Navbar />
            {cards}
            
        </>
    )
}