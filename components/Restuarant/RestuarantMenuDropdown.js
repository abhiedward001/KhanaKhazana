import React from 'react'
import FoodInfo from './FoodInfo'
import { useState } from 'react'
function RestuarantMenuDropdown({ data ,toggle, setToggle}) {

    const toggleHandler = () => {
        setToggle();
    }
  
    return (

        <div className="w-6/12 mx-auto bg-gray-100 shadow-lg my-4 p-4 ">
            <div className='flex flex-wrap justify-between cursor-grab' onClick={toggleHandler}>
                <span className="font-bold text-2xl">{data.title} ({data.itemCards.length})</span>
                <span className='text-2xl hover:cursor-pointer' onClick={toggleHandler}> {!toggle ? "⬇" : "⬆"} </span>
            </div>
            <div>
                {console.log(data.itemCards)}
                <ul>
                    {data.itemCards.map((item) => {
                        return (<li key={item?.card?.info?.id} >{toggle && <FoodInfo  itemValue={item?.card?.info}></FoodInfo>}</li>)
                    })}
                </ul>
            </div>
            {/* {toggle && toggleData} */}

        </div>
    )
}

export default RestuarantMenuDropdown