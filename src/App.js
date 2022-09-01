import React from "react"

import "./style.css"

import Navbar from "./components/Navbar"
import Card from "./components/Card"
import Jokes from "./components/Jokes"
import JokesData from "./components/JokesData"

export default function App(){
    const JokeElements = JokesData.map(joke => {
        return(
            <Jokes 
                joke={joke.joke}
                answer={joke.answer}
                hasAnswer={joke.hasAnswer}
            />
        )
    })
    return(
        <>
            {JokeElements}
            {/* <Navbar />
            <Card 
                img = "https://avatars.githubusercontent.com/u/109689002?v=4"
                rating = "5.0"
                r_count = {6}
                location = "USA"
                title = "Life lessons with Katia Zaferes."
                price = {316}

            />
            <Card 
                img = "https://avatars.githubusercontent.com/u/1096890002?v=4"
                rating = "4.5"
                r_count = {1821}
                location = "BRA"
                title = "Life lessons with Katia Zaferes."
                price = {2320}

            />
            <Card 
                img = "katie-zaferes.png"
                rating = "1.2"
                r_count = {320}
                location = "BRA"
                title = "Life lessons with Katia Zaferes."
                price = {200}

            /> */}
        </>
    )
}