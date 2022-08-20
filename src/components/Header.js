import React from "react"
import reactLogo from "../img/react-logo.png"

export default function Header(){
    return (
        <>
            <header className="header">
                <nav className="nav-container">
                    <img className="nav-logo" src={reactLogo}/>
                    <ul className="nav-items">
                        <li><a className="nav-link" href="https://www.google.com.br/">Pricing</a></li>
                        <li><a className="nav-link" href="https://www.google.com.br/">About</a></li>
                        <li><a className="nav-link" href="https://www.google.com.br/">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}