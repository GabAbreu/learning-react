import React from "react"
import reactLogo from "../img/react-logo.png"

export default function MainContent(){
    return(
        <div className="main-content">

            <h1>Fun facts about React</h1>
            <ul className="content-items">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K starts on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousand of enterprise apps, including mobile apps</li>
            </ul>
            <img src={reactLogo} ></img>
            <h1>Reasons why i'm learning React</h1>
            <ol>
                <li>Faster than vanilla html/css/javascript</li>
                <li>Easy to learn</li>
                <li>Updated for Skilled people</li>
            </ol>
            <input className="form-check-input" type="checkbox"></input>
        </div>
    )
}