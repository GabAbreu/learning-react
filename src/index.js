/*function MainContent(){
    return(
        <h1>I'm learning React!</h1>
    )
}

function Navbar(){
    return(
        <p>Hi</p>
    )
}

ReactDOM.render(
    <div>
        <Navbar/>
        <MainContent/>
    </div>
    ,document.getElementById("root")
)
*/


/* Creating a h1 appending to root vanilla javascript
const h1 = document.createElement("h1")
h1.textContent = "This is an imperative way to program"
h1.className = "Header"
document.getElementById("root").append(h1)
*/

const navbar = (
    <nav>
        <h1>KoxyD</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navbar,
    document.getElementById("root")
)