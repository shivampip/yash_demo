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

import PublicAPI from "./apis/PublicAPI";

import RandomUserAPI from "./apis/RandomUserAPI";
import HelloUser from "./HelloUser";

import GenderAPI from "./apis/GenderAPI";

import UserInfo from "./UserInfo";

import AgeAPI from "./apis/AgeAPI";

import HelloClass from "./HelloClass";

const App = () => {
    return (
        <div>
            <HelloClass city="Mumbai" />
            {/* <AgeAPI /> */}
            {/* <UserInfo /> */}
            {/* <GenderAPI /> */}
            {/* <HelloUser /> */}
            {/* <RandomUserAPI /> */}
            {/* <PublicAPI /> */}
            {/* <JokeAPI /> */}
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
