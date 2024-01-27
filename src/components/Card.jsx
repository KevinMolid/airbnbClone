import React from "react"

function Card(props) {

    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <article className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img className="card--img" src={`/images/${props.item.coverImg}`} alt="Image of Katie Zaferes" />
            <div className="card--first-line">
                <img className="card--star-icon" src="/images/star.png" alt="Star icon" />
                <span>{props.item.stats.rating.toFixed(1)}</span>
                <span className="grey margin-left">({props.item.stats.reviewCount}) • </span>
                <span className="grey margin-left">{props.item.location}</span>
            </div>
            <h2>{props.item.title}</h2>
            <p className="card--price"><span className="bold">From ${props.item.price}</span> / person</p>
        </article>
    )
}

export default Card