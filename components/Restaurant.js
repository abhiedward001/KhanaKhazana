import React, { useState, useEffect } from "react"
import { resURL } from "../utils/constans";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";


const Restuarant = () => {

    const [cartDetailObject, setCartDetailObject] = useState({});

    const {resId}=useParams();
    console.log({resId});

    useEffect(() => {
        fetchCartData();
    }, [])

    const fetchCartData = async () => {
        const cartData = await fetch(`${resURL}${resId}`);
        const jsonCartData = await cartData.json();

        setCartDetailObject(jsonCartData);
    }


    if (Object.keys(cartDetailObject).length === 0) return <Shimmer />;

    const { itemCards: menuitems } = cartDetailObject?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;
    const { name } = cartDetailObject?.data?.cards[0]?.card?.card?.info;
    console.log(menuitems);
    
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