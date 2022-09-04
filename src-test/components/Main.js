import React from "react"

import Background from "../image/background-coffee.jpg"
import Char from "../image/coffee-char.png"
import Balconi from "../image/balconi.png"
import Menu from "../image/menu.png"
import Bandeja from "../image/bandeja.png"
import MenuOpc from "../image/menu-opc.png"
import FoodMenu from "../image/food-menu.png"
import Pedido from "../image/pedido.png"
import PedidoComida from "../image/pedido-comida.png"

export default function Main(){
    return(
        <div className="main">
            
            <img className="main--background" src={Background}></img>
            <img className="main--char" src={Char}></img>
            <img className="main--balconi" src={Balconi}></img>
            <img className="main--menu_opc" src={MenuOpc}></img>
            <img className="main--menu" src={Menu}></img>
            <img className="main--bandeja" src={Bandeja}></img>
            <img className="main--food_menu" src={FoodMenu}></img>


            <img className="main--pedido" src={Pedido}></img>
            <img className="main--pedido_comida" src={PedidoComida}></img>
            

            <img className="main--pedido2" src={Pedido}></img>
            <img className="main--pedido_comida2" src={PedidoComida}></img>

            <img className="main--pedido3" src={Pedido}></img>
            <img className="main--pedido_comida3" src={PedidoComida}></img>
        </div>
    )
}