import React, {useState, useEffect } from "react"

import Shimmer from "./Shimmer";

const Restuarant = () => {
   
    const [cartDetailObject,setCartDetailObject]=useState({});

    useEffect(()=>{
     fetchCartData();
    },[])

    const fetchCartData=async()=>{
        const cartData= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.680619997448414&lng=77.4815347418189&restaurantId=626553&catalog_qa=undefined&submitAction=ENTER");
        const jsonCartData=await cartData.json();
        setCartDetailObject(jsonCartData);
    }

   if(Object.keys(cartDetailObject).length===0)return <Shimmer/>;

//    console.log(Object.keys(cartDetailObject).length); ( debugger )

   const{name}=cartDetailObject?.data?.cards[0]?.card?.card?.info;

    return (
        <div className="menu">
            <h1>{name}</h1>
            
            <h2>Menu</h2>
            <ul>
                <li>Burger</li>
                <li>Pasta</li>
                <li>Maggie</li>
            </ul>
        </div>
    )
}

export default Restuarant;