import React from "react";
import ResturantCard from "./ResturantCard";
import resData from "../utils/mockData";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";


// Body of webpage
const Body = () => {
    // console.log("Hello world");
    const [listOfResturants, setListOfResturnts] = useState([]);
    const [filterResturants, setFilterResturants] = useState([]);
    const [searchText, setSearchText] = useState("");
    const internetStatus = useInternetStatus();


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
        const filteresData = listOfResturants.filter((data) => data.info.avgRating > 4.2);
        setFilterResturants(filteresData);
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

    if (internetStatus === false) {
        return (<h1>Opps looks like your internet connection is off</h1>)
    }
    return (listOfResturants.length === 0) ? (<div ><Shimmer ></Shimmer>/</div>) : (
        <div className="bodyContainer mx-11 ">

            <div className="resFilter flex items-center mx-10">

                <button className="resFilterButton px-4 bg-gray-200 h-7 rounded-lg " onClick={filterResData}>Filter Top Resturants</button>

                <div className="search m-2 p-4 ">
                    <input className="border border-black rounded-md w-[300px]" type="text" onChange={searchTextHandler} value={searchText}></input>
                    <button className="px-4 m-2 bg-blue-200 rounded-md" onClick={searchBtnHandler}>Submit</button>
                </div>

            </div>

            <div className="resContainer flex flex-wrap ">
                {  console.log(filterResturants)}
                {
                    filterResturants.map((item) =>
                        <Link key={item.info.id} to={`restaurant/${item.info.id}`}>
                            <ResturantCard  resData={item} />
                        </Link>)
                }
            </div>

        </div>
    )
}

export default Body;