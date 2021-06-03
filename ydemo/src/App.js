import React, { useState } from "react";

import Demo from "./Demo";
import LikeButton from "./LikeButton";

import Card from "./Card";

import BlogPost from "./BlogPost";
import BlogWithCSS from "./BlogWithCSS";

import DynamicBlog from "./DynamicBlog";

import Bitcoin from "./Bitcoin";

import DogAPI from "./DogAPI";
import JokeAPI from "./apis/JokeAPI";

const App = () => {
    return (
        <div>
            <JokeAPI />
            {/* <Bitcoin /> */}
            {/* <DogAPI /> */}
            {/* <DynamicBlog /> */}

            {/* <button
                onClick={(e) => {
                    // alert("Working...");
                    const newPosts = [
                        ...posts,
                        {
                            heading: "India",
                            content: "A Country",
                        },
                    ];
                    console.log(newPosts);
                    setPosts(newPosts);
                }}
            >
                Add New Blog
            </button> */}
            {/* {posts.map((item) => {
                console.log("Now printing " + item.heading);
                return (
                    <BlogPost heading={item.heading} content={item.content} />
                );
            })} */}

            {/* <BlogPost heading="I am Heading" content="I am content" />
            <BlogPost heading="I am Heading 2" content="I am content 2" /> */}
            {/* <BlogWithCSS /> */}
            {/* <h1>Hello Yash</h1>
            <h2>Hello Shivam</h2>
            <Demo />
            <LikeButton text="This is normal value" cc="red" city="Pipariya" />
            <LikeButton text="Hello Button" cc="green" />

            <Card heading="Hello React" content="A JS Framework" />
            <Card heading={name} content="I am Javascript" /> */}
        </div>
    );
};

export default App;
