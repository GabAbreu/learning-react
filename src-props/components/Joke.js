import React from "react"

export default function Joke(props){
    return(
        <div className = "joke">
            <h1 className="question">Name: {props.name}</h1>
            <p className="answer">Age: {props.age}</p>
        </div>
    )
}