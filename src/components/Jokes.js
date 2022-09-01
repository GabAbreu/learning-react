import React from "react"

export default function Jokes(props){
    return(
        <div className="joke">
            <h3>Joke: {props.joke}</h3>
            {props.hasAnswer ? <p>Answer: {props.answer}</p> : ""}
        </div>
    )
}