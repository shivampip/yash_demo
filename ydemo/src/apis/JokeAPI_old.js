import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://official-joke-api.appspot.com/random_joke";

const DogAPI = () => {
    const [res, setRes] = useState(null);

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
    }, []);

    return (
        <div>
            <h2>JOKE</h2>
            {res !== null && (
                <div>
                    <h3>{res.punchline}</h3>
                    <p>{res.setup}</p>
                </div>
            )}
        </div>
    );
};

export default DogAPI;
