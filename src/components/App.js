import React from "react"

//images
import "../style.css"

//components
import Header from "../components/Header"
import MainContent from "../components/MainContent"
import Footer from "../components/Footer"

export default function App(){
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
        </>
    )
}