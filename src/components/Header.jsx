import React from "react"
import airbnbLogo from "/src/images/airbnb-logo.png"

function Header() {
    return (
        <header>
            <img className="header--logo-img" src={airbnbLogo} alt="airbnb Logo" />
        </header>
    )
}

export default Header