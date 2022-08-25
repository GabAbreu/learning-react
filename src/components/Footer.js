import React from "react";

import Twitter from "../images/twitter-logo.png";
import Facebook from "../images/facebook-logo.png";
import Instagram from "../images/instagram-logo.png";
import Github from "../images/github-logo.png"

export default function(){
    return(
        <footer>
            <button><img src={Twitter}></img></button>
            <button><img src={Facebook}></img></button>
            <button><img src={Instagram}></img></button>
            <button><img src={Github}></img></button>
        </footer>
    )
};