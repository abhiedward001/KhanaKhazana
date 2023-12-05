import React from "react";
import { useEffect, useState } from "react";


const useInternetStatus = () => {

    const [internetStatus, setInternetStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", (e) => {
            console.log("offline");
            setInternetStatus(false);

        });

        window.addEventListener("online", (e) => {
            console.log("online");
            setInternetStatus(true);
        });
  }, [])
  
    return internetStatus;
}

export default useInternetStatus;