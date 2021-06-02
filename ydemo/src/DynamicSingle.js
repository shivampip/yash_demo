import axios from "axios";
import React, { useEffect, useState } from "react";

const DynamicSingle = ({ item }) => {
    const [userdata, setUserdata] = useState(null);

    // useEffect(() => {
    //     axios
    //         .get("https://jsonplaceholder.typicode.com/users/" + item.userId)
    //         .then((response) => {
    //             console.log("Response for userID: " + item.userId);
    //             console.log(response.data);
    //             setUserdata(response.data);
    //         })
    //         .catch((error) => {
    //             console.log("Error aa gyi hai");
    //         });
    // }, []);

    return (
        <div
            key={item.id}
            style={{ border: "1px solid black", margin: "10px" }}
        >
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            Writter By:{" "}
            {userdata != null ? <h4>{userdata.name}</h4> : <h4>Unknown</h4>}
        </div>
    );
};

export default DynamicSingle;
