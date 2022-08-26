import React from "react";

import Email from "../images/email-logo.png";
//import Picture from "../images/picture.png";
var Picture = "";
    fetch("https://api.github.com/users/GabAbreu")
        .then(response => {
            if(!response.ok){
                throw "erro";
            }
            return(response.json());
        })
        .then(result => {
            Picture = result?.avatar_url ?? "../images/picture.png";
        }).catch(err =>{
            console.log(err)
        });



export default function(){
    return(
        <>
            <img className="info--picture" src={Picture}></img>
            <div className="info--label">
                <h1 className="info--name">Gabriel Abreu</h1>
                <h2 className="info--occupation">FullStack Developer</h2>
                <h3 className="info--site">GabAbreu.website</h3>
            </div>
            <div className="info--buttons">
                <button className="info--email">Email</button>
                <button className="info--linkedin">Linkedin</button>
            </div>
        </>
    )
};