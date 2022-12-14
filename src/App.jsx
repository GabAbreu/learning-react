import Header from "./components/Header"
import Footer from "./components/Footer"
import MainContent from "./components/MainContent"
import State from "./components/State"
import Counter from "./components/Counter"

import "./index.css"

export default function App(){
    return(
        <>
            <Header />
            <MainContent />
            <Footer />
            {/* <State /> */}
            <Counter />
        </>
    )
}