import React from "react"

//images
import "../style.css"
//import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css"

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