import React from "react";
import { iconUrl } from "../utils/constans";
import { useState} from "react";
import { Link } from "react-router-dom";



// Header of the website
const Header = () => {
    const[loginBtn,setLoginBtn]=useState("Login");

    const logibBtnHandler=()=>{
      const currentBtnState=(loginBtn==="Login")?"Logout":"Login";
      setLoginBtn(currentBtnState);
    }

  return (
     <div className="Header">
        <div className="headerIconContainer">
            <img className="headerIcon" src={iconUrl} />
        </div>

        <div className="headerButtons">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/aboutus">About Us</Link></li>
                <li><Link to="/privacy">Privacy</Link></li>
                <li>Cart</li>
                <button  className="login-Btn" onClick={logibBtnHandler}>{loginBtn}</button>
            </ul>
        </div>
    </div> 
    )
}

export default Header;