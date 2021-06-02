import React, { useEffect, useState } from "react";
import axios from "axios";
import DynamicSingle from "./DynamicSingle";

const DynamicBlog = () => {
    const [postdata, setPostdata] = useState([]);
    const [loadcolor, setLoadcolor] = useState("yellow");

    useEffect(() => {
        console.log("Inside useEffect");

        //show= moving wheel
        axios
            .get("https://jsonplaceholder.typicode.com/posts/")
            .then((response) => {
                console.log("Got response");
                console.log(response.data);
                setPostdata(response.data);
            })
            .catch((error) => {
                console.log("Error aa gyi hai");
            })
            .then(() => {
                //Alwasu
                //API call finished
                //hide= moving wheel
                setLoadcolor("cyan");
            });
    }, []);

    return (
        <div
            style={{
                backgroundColor: loadcolor,
            }}
        >
            <h2>Dynamic Blog</h2>
            {/* {loadcolor === "yellow" ? <h1>Loading....</h1> : <h1>Loaded</h1>} */}
            {loadcolor === "yellow" && <h1>Loading Blog...</h1>}
            {postdata.map((item) => {
                return <DynamicSingle item={item} />;
            })}
        </div>
    );
};

export default DynamicBlog;
