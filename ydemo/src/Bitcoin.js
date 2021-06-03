import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.coindesk.com/v1/bpi/currentprice.json";
// const API_URL = "https://www.boredapi.com/api/activity";

const Bitcoin = () => {
    const [res, setRes] = useState(null);

    // ananomy arrow function
    // array: []
    useEffect(() => {
        // axios.get(API_URL).then().catch().then()
        // callback: ()=> {}

        // axios.get(API_URL)
        // .then((response)=> {})
        // .catch((error)=> {})
        // .then(()=> {})

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

    return res !== null ? (
        <div>
            <h2>Bitcoin</h2>
            <h3>Price in USD: {res.bpi.USD.rate}</h3>
            <h4>Time: {res.time.updated}</h4>
        </div>
    ) : (
        <h3>Loading...</h3>
    );
};

export default Bitcoin;

///Chaining
// res= bottle.get()
// res.okay()

// bottle.get().okay()
