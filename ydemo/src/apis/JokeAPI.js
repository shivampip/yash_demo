import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://test-magazine.qureal.com/members/login";

const DogAPI = () => {
    const [res, setRes] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);

        // fetch(API_URL, {
        //     method: "POST", // or 'PUT'
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify({
        //         email: "hello@gmail.com",
        //         password: "hello123",
        //     }),
        // })
        //     .then((response) => {
        //         console.log("Currently in first then (raw response)");
        //         return response.json();
        //     })
        //     .then((data) => {
        //         console.log("Sucdess response");
        //         console.log("Success:", data);
        //     })
        //     .catch((error) => {
        //         console.log("Errorsdfsdfd response");
        //         console.error("Error:", error);
        //     });

        axios
            .post(API_URL, {
                email: "hello@gmail.com",
                password: "hello123",
            })
            .then((response) => {
                console.log("Response Received");
                console.log(response.data);
                setRes(response.data);
            })
            .catch((error) => {
                console.log("Error aa gyi");
                console.log(error.response.data);
            })
            .then(() => {
                console.log("Request Finished");
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h2>JOKE</h2>
            {/* {loading && <h1>Loading......</h1>} */}
            {res !== null ? (
                <div>
                    <h2>{res.message}</h2>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
};

export default DogAPI;

//Cookies
//Token
