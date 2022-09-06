import React from "react"

import Star from "../images/star.png"

export default function Card(props){
    let badgeText
    if (props.openSpots === 0){
        badgeText = "SOLD OUT"
    }else if(props.location === "Online"){
        badgeText = "ONLINE"
    }

    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--photo" src={`./images/${props.coverImg}`}/>
            <div className="card--rate">
                <img className="card--star" src={Star}/>
                <div className="card--rating">{props.stats.rating}</div>
                <div className="card--review_count">({props.stats.reviewCount}) • </div>
                <div className="card--location">{props.location}</div>
            </div>
            <h2 className="card--title">{props.title}</h2>
            <p className="card--cost"><b>From ${props.price}</b> / person</p>
        </div>
    )
}
