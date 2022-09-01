import React from "react"

import Body from "../images/character/model.png"
import Head from "../images/character/head/4.png"
import Hair from "../images/character/hair/3.png"
import Shirt from "../images/character/shirt/3.png"
import Pants from "../images/character/pants/4.png"
import Shoes from "../images/character/shoes/1.png"



export default function Character(){
    return(
        <div className="char--main">
            <img src={Head} className="char--head" />
            <img src={Body} className="char--body" />
            <img src={Hair} className="char--hair" />
            <img src={Shirt} className="char--shirt" />
            <img src={Pants} className="char--pants" />
            <img src={Shoes} className="char--shoes" />
        </div>
    )
}