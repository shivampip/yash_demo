import React, { useState, useEffect } from "react";
import axios from "axios";

// const URL = "https://api.genderize.io/?name=meera";

const GenderAPI = () => {
    const [res, setRes] = useState(null);
    const [name, setName] = useState("meera");

    useEffect(() => {
        if (name.length <= 2) {
            return;
        }
        axios
            .get("https://api.genderize.io/?name=" + name)
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
    }, [name]);

    return (
        <div>
            <h2>Welcome to Gender API</h2>
            <input
                type="text"
                value={name}
                onChange={(eve) => {
                    setName(eve.target.value);
                }}
            />
            <h1>Name: {name}</h1>
            {res !== null ? <h1>Gender: {res.gender}</h1> : <h2>Loading...</h2>}
        </div>
    );
};

export default GenderAPI;
