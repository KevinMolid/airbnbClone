import React from "react"
import starIcon from "/src/images/star.png"

/*
- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)
*/

function Card(props) {
    return (
        <article className="card">
            <img className="card--img" src={`/src/images/${props.img}`} alt="Image of Katie Zaferes" />
            <div className="card--first-line">
                <img className="card--star-icon" src={starIcon} alt="Star icon" />
                <span>{props.rating}</span>
                <span className="grey">({props.reviewCount}) • </span>
                <span className="grey">{props.country}</span>
            </div>
            <h2>{props.title}</h2>
            <p><span className="bold">From ${props.price}</span> / person</p>
        </article>
    )
}

export default Card