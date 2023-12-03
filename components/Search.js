import React from "react";
import { useState } from "react";

const Search = (props) => {
    const [searchText, setSearchText] = useState("");
    const{listOfResturants}=props.listOfResturants;
    console.log(listOfResturants);

    const searchTextHandler = (e) => {
        setSearchText(e.target.value);
        console.log(searchText);
    }
    const searchBtnHandler=() => {
        const searchFilterData = listOfResturants.filter(res => {
            return (res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        })
        setFilterResturants(searchFilterData);
        console.log(searchFilterData);
        console.log(searchText);

    }

    return (<>
        <input type="text" onChange={searchTextHandler} value={searchText}></input>
        <button onClick={searchBtnHandler}>Submit</button>
    </>)
}

export default Search;