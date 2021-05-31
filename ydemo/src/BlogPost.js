import React from "react";

const BlogPost = ({ heading, content }) => {
    return (
        <div
            style={{
                padding: "15px",
                margin: "10px",
                backgroundColor: "#f5f5f5",
                border: "1px solid grey",
            }}
        >
            <h1>{heading}</h1>
            <p
                style={{
                    fontSize: "1.2rem",
                }}
            >
                {content}
            </p>
        </div>
    );
};

export default BlogPost;

// h1{
//     background-color: yellow;
//     color: green;
// }
