import React from "react";
import { imgUrl } from "../../utils/constants";
import Userinfo from "../../utils/Userinfo";
import { useContext } from "react";

const ResturantCard = (props) => {
    // console.log(props.resData.info);
    const {Name}=useContext(Userinfo);

    const { name, cuisines, avgRating, deliveryTime, cloudinaryImageId } = props.resData?.info;
    return (
        <div className="resCard  rounded-md m-6 p-6 w-[350px] h-[450px] bg-gray-100 hover:bg-gray-200 hover:scale-110 transition duration-500 cursor-pointer">
            <img alt="Res-LOGO" className="mx-5 py-4 h-[200px] w-[250px]  rounded-md" src={`${imgUrl}${cloudinaryImageId}`}></img>
            <div className="mx-2">
                <h3 className="font-bold ">{name}</h3>
                <h4 className="py-1 text-gray-500">{cuisines.join(", ")}</h4>
                <h4 className="py-1">{avgRating + " ⭐"}</h4>
                <h4 className="py-1">{200 + " ₹"}</h4>
                <h4 className="py-1">{deliveryTime}</h4>
                <h4 className="py-1">{Name}</h4>
            </div>

        </div>
    )
}

export default ResturantCard;


// export const promotedResturantCard = (ResturantCard)=> {
//     return () => {
//         return 
//         (
//             <div>
//                 <label>Promoted</label>
//                 <ResturantCard></ResturantCard>
//             </div>
//         )
//     }

// }