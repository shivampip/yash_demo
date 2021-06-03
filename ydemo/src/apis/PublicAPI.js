import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://api.publicapis.org/entries";

const PublicAPI = () => {
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
            <h2>Public API List</h2>
            {res !== null && (
                <div>
                    <h3>Response aa gya</h3>
                    <h4>Total {res.count} APIs received</h4>
                    {res.entries.map((item) => {
                        return (
                            <div>
                                <h4>{item.API}</h4>
                                <p>{item.Description}</p>
                                <a href={item.Link} target="_blank">
                                    {item.Link}
                                </a>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default PublicAPI;
