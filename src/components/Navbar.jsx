import React from "react"
import airbnbLogo from "/src/images/airbnb-logo.png"

function Navbar() {
    return (
        <header>
            <img className="navbar--logo-img" src={airbnbLogo} alt="airbnb Logo" />
        </header>
    )
}

export default Navbar