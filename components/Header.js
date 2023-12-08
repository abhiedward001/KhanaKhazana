import React from "react";
import { iconUrl } from "../utils/constans";
import { useState} from "react";
import { Link } from "react-router-dom";
import useInternetStatus from "../utils/useInternetStatus";
import CartIcon from "./Carticon";

// Header of the website
const Header = () => {
    const[loginBtn,setLoginBtn]=useState("Login");
    const internetStatus=useInternetStatus();

    const logibBtnHandler=()=>{
      const currentBtnState=(loginBtn==="Login")?"Logout":"Login";
      setLoginBtn(currentBtnState);
    }

  return (
     <div className="flex justify-between bg-gray-800 h-[100px] items-center">
        <div className="headerIconContainer">
            <img className="h-20" src={iconUrl} />
        </div>

        <div className="flex items-center ">
            <ul className="flex p-3 m-3">
                <li className="px-4 mx-2  text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased">Online Status: {internetStatus? "🟢" : "❌"} </li>
                <li className="px-4  mx-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased"><Link to="/">Home</Link></li>
                <li className="px-4  mx-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased"><Link to="/aboutus">About Us</Link></li>
                <li className="px-4  mx-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased"><Link to="/privacy">Privacy</Link></li>
                <li className="px-4  mx-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased">Cart</li>
                <button  className="login-Btn px-4  mx-2 text-white font-mono text-md font-bold hover:bg-gray-900 hover:rounded-md antialiased" onClick={logibBtnHandler}>{loginBtn}</button>
            </ul>
        </div>
    </div> 
    )
}

export default Header;