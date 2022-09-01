import React from "react"

import Logo from "../images/logo.png"

import Facebook from "../images/facebook-logo.png"
import Instagram from "../images/instagram-logo.png"
import Twitter from "../images/twitter-logo.png"

import CardLogin from "../images/card-login.png"

export default function Navbar(){
    return(
        <header>
            <div className="nav--social_media">
                <a href = "https://www.facebook.com/"><img src = {Facebook} /></a>
                <a href = "https://www.instagram.com/"><img src = {Instagram} /></a>
                <a href = "https://twitter.com/"><img src = {Twitter} /></a>
            </div>
            <img className="nav--logo" src={Logo} />
            <img className="nav--login" src={CardLogin}/>
        </header>
    )
}

/*
<a href="./create-account.html">Criar conta</a>
                /
                <a href="./login.html">Login</a>
*/