import React, { useState, useEffect } from "react";
import axios from "axios";

// const URL = "https://api.genderize.io/?name=meera";

// Fn+F2 ya F2

const AgeAPI = () => {
    const [ageRes, setAgeRes] = useState(null);
    const [genRes, setGenRes] = useState(null);
    const [name, setName] = useState("meera");

    useEffect(() => {
        if (name.length <= 2) {
            return;
        }

        //Calling Age API
        axios
            .get("https://api.agify.io/?name=" + name)
            .then((response) => {
                console.log("Response Received");
                console.log(response.data);
                setAgeRes(response.data);
            })
            .catch((error) => {
                console.log("Error aa gyi");
                console.log(error);
            })
            .then(() => {
                console.log("Request Finished");
            });
    }, [name]);

    useEffect(() => {
        if (name.length <= 2) {
            return;
        }

        //Calling Gendeeer API
        axios
            .get("https://api.genderize.io/?name=" + name)
            .then((response) => {
                console.log("Response Received");
                console.log(response.data);
                setGenRes(response.data);
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
            <h2>Welcome to Age API</h2>
            <input
                type="text"
                value={name}
                onChange={(eve) => {
                    setName(eve.target.value);
                }}
            />
            <h1>Name: {name}</h1>
            {ageRes !== null ? <h1>Age: {ageRes.age}</h1> : <h2>Loading...</h2>}
            {genRes !== null ? (
                <h1>Gender: {genRes.gender}</h1>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default AgeAPI;
