import React from "react";

import Info from  "./components/Info";
import About from "./components/About";
import Interests from "./components/Interests";
import Footer from "./components/Footer";

export default function(){
    return(
        <div className="app--main">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
};