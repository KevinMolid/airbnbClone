import React from "react"
import heroImg from "/src/images/photo-grid.png"

function Hero() {
    return (
        <section className="hero">
            <img className="hero--img" src={heroImg} alt="" />
            <h1 className="hero--h1">Online Experiences</h1>
            <p>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero