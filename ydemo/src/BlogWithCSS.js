import React, { useState } from "react";
import "./BlogWithCSS.css";
import Webcam from "react-webcam";

const BlogWithCSS = () => {
    const [data, setData] = useState("user");
    const [city, setCity] = useState("Pipariya");
    const [user, setUser] = useState({
        first_name: "Yash",
        last_name: "Sahu",
        city: "Pipariya",
    });
    const [num_like, setNumLike] = useState(0);

    return (
        <div className="wrapper">
            <h2 className="title">Hello {data}</h2>
            <p className="content">
                My name is {user.first_name} {user.last_name}. and I live at{" "}
                {user.city}
            </p>
            {/* <Webcam height={300} width={400} /> */}

            <button
                onClick={(e) => {
                    // alert("Hello Yash, I am clicked");
                    setData("Yash");
                    setCity("Bhopal");

                    const newUser = {
                        ...user,
                        first_name: "Ankit",
                    };
                    setUser(newUser);
                    setNumLike(num_like + 1);
                }}
            >
                Like Post {num_like}
            </button>
        </div>
    );
};

export default BlogWithCSS;

// const aa= 34;
// const bb= "hello";
// const bike= {
//     modle: "sdfsd",
//     company: "sdfdsf",
//     color: "black"
// }
// bike.company
