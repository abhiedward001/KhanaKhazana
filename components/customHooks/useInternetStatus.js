import React from "react";
import { useEffect, useState } from "react";


const useInternetStatus = () => {

    const [internetStatus, setInternetStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("offline", (e) => {
            setInternetStatus(false);

        });

        window.addEventListener("online", (e) => {
            setInternetStatus(true);
        });
  }, [])

    return internetStatus;
}

export default useInternetStatus;