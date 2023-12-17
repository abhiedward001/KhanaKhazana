import React from "react";
import { useEffect,useState } from "react";
import { resURL } from "./constants";

const useResturantFetchData = (resId) => {

    const [cartDetailObject, setCartDetailObject] = useState({});

    useEffect(() => {
        fetchCartData();
    }, [])

    const fetchCartData = async () => {
        console.log(`${resURL}${resId}`)
        const cartData = await fetch(`${resURL}${resId}`);
        const jsonCartData = await cartData.json();
        console.log(jsonCartData);

        setCartDetailObject(jsonCartData);
    }
    return cartDetailObject;
}

export default useResturantFetchData;