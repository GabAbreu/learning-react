import React from "react"

import Joke from "./components/Joke"

import "./style.css"

export default function App(){

    const asd = [{
        name: "Gabriel",
        age: 23,
        isPun: true
    }, {
        name: "Aline",
        age: 40,
        isPun: false
    },{
        name: "Thalita",
        age: 26,
        isPun: false
    },{
        name: "Ben",
        age: 27,
        isPun: false
    }]
        return(
            <Joke 
                name = {asd[0].name}
                age = {asd[0].age}
            />
        )
}