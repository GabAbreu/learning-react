function Header(){
    return (
        <header className="header">
            <nav className="nav-container">
                <img className="nav-logo" src="..\img\react-logo.png" />
                <ul className="nav-items">
                    <li><a className="nav-link" href="https://google.com.br">Pricing</a></li>
                    <li><a className="nav-link" href="https://google.com.br">About</a></li>
                    <li><a className="nav-link" href="https://google.com.br">Contact</a></li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent(){
    return(
        <div className="main-content">
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Faster development</li>
                <li>Learning new tech</li>
                <li>Easier development</li>
            </ol>
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <small>© 2022 GabAbreu development. All rights reserved.</small>
        </div>
    )
}

function Page(){
    return(
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))