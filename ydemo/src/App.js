import React from "react";

import Demo from "./Demo";
import LikeButton from "./LikeButton";

import Card from "./Card";

const App = () => {
    const name = "Rakesh";

    return (
        <div>
            <h1>Hello Yash</h1>
            <h2>Hello Shivam</h2>
            <Demo />
            <LikeButton text="This is normal value" cc="red" city="Pipariya" />
            <LikeButton text="Hello Button" cc="green" />

            <Card heading="Hello React" content="A JS Framework" />
            <Card heading={name} content="I am Javascript" />
        </div>
    );
};

export default App;
