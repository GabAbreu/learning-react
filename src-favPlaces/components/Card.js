import React from "react"

export default function Card(props){
    return(
        <div className={`card back-${props.color}`} >
            <h2 className="card--title">{props.title}</h2>
            <p className="card--description">{props.description}</p>
            <img className="card--image mask1" src={props.image} />
        </div>
    )
}