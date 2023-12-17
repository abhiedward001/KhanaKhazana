import React from "react";
import { useState } from "react";



// this is also just for learning class bases component and comparing with Userclass.js

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