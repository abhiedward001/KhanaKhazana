import React from "react";
import { imgUrl } from "../utils/constans";

const ResturantCard = (props) => {
    // console.log(props.resData.info);
    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = props.resData?.info;
    return (
        <div className="resCard" style={{
            backgroundColor: "#f0f0f1"
        }}>
            <img alt="Res-LOGO" src={`${imgUrl}${cloudinaryImageId}`} style={{
                height: "150px",
                width: "80%", paddingLeft: "10%"
            }}></img>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime}</h4>
            <h4>{200 + " Rs"}</h4>
        </div>
    )
}

export default ResturantCard;