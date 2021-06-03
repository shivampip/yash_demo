import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://randomuser.me/api/";

const RandomUserAPI = () => {
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
            <h2>Random User API List</h2>
            {res !== null && (
                <div>
                    <h3>Response aa gya</h3>
                    {res.results.map((item) => {
                        return (
                            <div>
                                <h4>
                                    {item.name.first} {item.name.last}
                                </h4>
                                <p>{item.location.city}</p>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default RandomUserAPI;
