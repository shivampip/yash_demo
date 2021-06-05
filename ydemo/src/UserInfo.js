import React, { useState } from "react";

const UserInfo = () => {
    const [fname, setFname] = useState("User");
    const [lname, setLname] = useState("");
    const [city, setCity] = useState("India");

    return (
        <div>
            <h1>User Info</h1>
            <input
                type="text"
                value={fname}
                onChange={(eve) => setFname(eve.target.value)}
            />
            <input
                type="text"
                value={city}
                onChange={(eve) => setCity(eve.target.value)}
            />
            <h3>
                Hello {fname}, How are you? You live in {city}. Your name has{" "}
                {fname.length} letters.
            </h3>
        </div>
    );
};

export default UserInfo;

// ()=> {
//     setName("dsdf")
//     setCity("dfsd")
// }

// ()=> setName("sdfd")
