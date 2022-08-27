import React from "react"

//import Katie from "../images/katie-zaferes.png"
import Star from "../images/star.png"

export default function Card(props){
    

    return(
        <div className="card">
            <img className="card--photo" src={props.img}/>
            <div className="card--rate">
                <img className="card--star" src={Star}/>
                <span className="card--rating">{props.rating}</span>
                <span className="card--review_count">({props.r_count}) • </span>
                <span className="card--location">{props.location}</span>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--cost"><b>From {props.price}</b> / person</p>
        </div>
    )
}

//Life lessons with Katia Zaferes.
//$316