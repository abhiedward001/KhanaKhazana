import React, { useState, useEffect } from "react"

import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantFetchData from "../utils/useResturantFetchData";


const Restuarant = () => {
    const {resId}=useParams();
    const resInfo=useResturantFetchData(resId); // using custom hook for fetching the data
 
    if (Object.keys(resInfo).length === 0) return <Shimmer />;

    const { itemCards: menuitems } = resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    const { name } = resInfo?.data?.cards[0]?.card?.card?.info;
    return (
        <div className="menu">
            <h1>{name}</h1>
            <h2>Menu</h2>
            <ul>
                {
                    menuitems.map((item) => {
                        return (<li key={item.card.info.id}>{item.card.info.name}</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Restuarant;