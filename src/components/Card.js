import React from "react"

import Star from "../images/star.png"

export default function Card(props){
    

    return(
        <div className="card">
            <img className="card--photo" src={props.img} alt="Girl in a jacket"/>
            <div className="card--rate">
                <img className="card--star" src={Star} alt="Girl in a jacket"/>
                <div className="card--rating">{props.rating}</div>
                <div className="card--review_count">({props.r_count}) • </div>
                <div className="card--location">{props.location}</div>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--cost"><b>From ${props.price}</b> / person</p>
        </div>
    )
}


//../images/katie-zaferes.png