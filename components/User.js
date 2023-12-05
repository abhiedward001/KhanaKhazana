import React from "react";
import { useState } from "react";

const User=(props)=>{
    const [count,setCount]=useState(0);
    const {name,city}=props;
    return (
        <>
        <div className="user-detail">
        <button className="aboutButton" onClick={()=>{setCount(count+1)}}>{`Counter:- ${count}`}</button>
        <h1>{name}</h1>
        <h2>Hometown:- {city}</h2>
        <h3>Juspay</h3>
        </div>
        </>
    )
}

export default User;