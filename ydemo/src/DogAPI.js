import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://dog.ceo/api/breeds/image/random";

const DogAPI = () => {
    const [res, setRes] = useState(null);
    const [count, setCount] = useState(0);

    useEffect(() => {
        axios
            .get(API_URL)
            .then((response) => {
                console.log("Response Received");
                console.log(response.data);
                setRes(response.data);
            })
            .catch((error) => {
                console.log("Error aa gyi");
                console.log(error);
            })
            .then(() => {
                console.log("Request Finished");
            });
    }, [count]);

    return (
        <div>
            <h2>Dog Image: {count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Load New Image
            </button>
            {res !== null && <img src={res.message} />}
        </div>
    );
};

export default DogAPI;
