import React from "react"
import PicIcon from "../images/picture-icon.png"

export default function Main() {
    return (
        <div className="main">
            <div className="main--input">
                <input type="text"></input>
                <input type="text"></input>
            </div>
            <button className="main--btn_generate" type="button">Get a new meme image<img className="main--btn_icon" src={PicIcon}></img></button>
            <img className="main--meme_img" src="https://ehacks.com.br/wp-content/uploads/167/17-shut-up-and-take-my-money-825x542.jpg"></img>
        </div>
    )
}