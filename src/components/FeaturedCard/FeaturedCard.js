import React from "react";
import './FeaturedCard.scss';
function FeaturedCard({props}){
    return (
        <div className="featuredCard">
            <div className="imageContainer">
                <img src={props.imageUrl} alt="image" />
                <div className="overlay"></div>
                <div className="tags">
                    <p>FEATURED</p>
                    <p>{props.status}</p>
                </div>
                <div className="price">
                    <p>{props.status==="FOR RENT" ? <span>From </span> : ""}{props.status==="FOR RENT" ? `${props.price}/mo` : `${props.price}`}</p>
                </div>
            </div>
            <div className="details">
                <h4>{props.name}</h4>
                <div className="icons">
                    <div>
                    <i className="fa-solid fa-bed"></i>
                    {props.numberOfBeds}
                    </div>
                    <div>
                    <i className="fa-solid fa-shower"></i>
                    {props.numberOfShowers}
                    </div>
                    <div>
                    <i className="fa-solid fa-ruler-combined"></i>
                    {props.area + " Sq Ft"}
                    </div>
                </div>
                <p>{props.type}</p>
            </div>
        </div>
    );
}

export default FeaturedCard;