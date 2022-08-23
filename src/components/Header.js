import React from "react"
import reactLogo from "../img/react-logo.png"

export default function Header(){
    return (
        <>
            <header className="header">
                <nav className="nav-container">
                    <div className="nav-logo">
                        <img src={reactLogo}/>
                        <p>ReactFacts</p>
                    </div>
                    <div className="nav-title">
                        <p>React Course - Project 1</p>
                    </div>
                </nav>
            </header>
        </>
    )
}