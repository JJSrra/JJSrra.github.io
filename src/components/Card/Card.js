import React from 'react';

function Card(props) {

    const accessLink = () => {
        document.location.href = props.link;
    }

    return (
        <div className="card" onClick={accessLink}>
            <img className="card-image" src={props.imageSource} alt="Test"/>
            <div className="card-text">{props.cardText}</div>
        </div>
    );
}

Card.defaultProps = {
    imageSource: "https://i.pinimg.com/originals/90/53/f8/9053f8a7b8440f6a8d1247e6d0d33429.jpg",
    cardText: "Coming soon!",
    link: ""
}

export default Card;