import React, { useState, useEffect } from "react"

import Shimmer from "../Shimmer";
import { useParams } from "react-router-dom";
import useResturantFetchData from "../customHooks/useResturantFetchData";
import RestuarantMenuDropdown from "./RestuarantMenuDropdown";

const Restuarant = () => {
    const {resId}=useParams();
    const resInfo=useResturantFetchData(resId); // using custom hook for fetching the data
    const [elemIndex, setElemIndex] = useState(0);

   
 
    if (Object.keys(resInfo).length === 0) return <Shimmer />;

    const menuitems = resInfo?.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards;
    const { name } = resInfo?.data?.cards[0]?.card?.card?.info;
    // console.log(resInfo)
    const filterCateogary=menuitems.filter((item)=>{
       return(item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    })

    return (
        <div className="menu  my-10 py-4 text-center">
            <h1 className="font-bold text-2xl my-8">{name}</h1>
            <h2 className="font-bold text-xl my-4">{resInfo?.data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
            <ul>

                 {/* here using the lifiting up state so that parent element can control the child element */}
                
                {
                    filterCateogary.map((item,index) => {
                        return (<li key={Math.random()}>{
                            <RestuarantMenuDropdown data={item.card.card} toggle={index===elemIndex?true:false} setToggle={()=>setElemIndex(index)}>

                            </RestuarantMenuDropdown>
                            }</li>)
                    })
                }
            </ul>
        </div>
    )
}

export default Restuarant;