import React from "react"

import "./style.css"

import Navbar from "./components/Navbar"
import Card from "./components/Card"

export default function App(){
    return(
        <>
            <Navbar />
            <Card 
                img = "https://avatars.githubusercontent.com/u/109689002?v=4"
                rating = "5.0"
                r_count = "6"
                location = "USA"
                title = "Life lessons with Katia Zaferes."
                price = "$316"

            />
            <Card 
                img = "https://avatars.githubusercontent.com/u/1096890002?v=4"
                rating = "4.5"
                r_count = "320"
                location = "BRA"
                title = "Life lessons with Katia Zaferes."
                price = "$200"

            />
            <Card 
                img = "../images/katie-zaferes.png"
                rating = "4.5"
                r_count = "320"
                location = "BRA"
                title = "Life lessons with Katia Zaferes."
                price = "$200"

            />
        </>
    )
}