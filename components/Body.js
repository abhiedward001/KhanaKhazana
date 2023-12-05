import React from "react";
import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

// Body of webpage
const Body = () => {
    // console.log("Hello world");
    const [listOfResturants, setListOfResturnts] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9431365&lng=77.6263452&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const jsonData = await data.json();
        setListOfResturnts(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        console.log(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterResturants(jsonData?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const filterResData = () => {
        const filteresData = listOfResturants.filter((data) => data.info.avgRating > 4);
        setListOfResturnts(filteresData);
    }

    const searchTextHandler = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
    }


    const searchBtnHandler = () => {
        const searchFilterData = listOfResturants.filter(res => {
            return (res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        })
        setFilterResturants(searchFilterData);
    }


    return (listOfResturants.length === 0) ? (<Shimmer />) : (
        <div className="bodyContainer">

            <div className="resFilter">

                <button className="resFilterButton" onClick={filterResData}>Filter Top Resturants</button>

                <div className="search">
                    <input type="text" onChange={searchTextHandler} value={searchText}></input>
                    <button onClick={searchBtnHandler}>Submit</button>
                </div>

            </div>

            <div className="resContainer">
                {filterResturants.map((item) => <Link to={`restaurant/${item.info.id}`}> <ResturantCard key={item.info.id} resData={item} /> </Link>)}
            </div>

        </div>
    )
}

export default Body;