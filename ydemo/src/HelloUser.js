import React, { useState } from "react";

const HelloUser = () => {
    const [name, setName] = useState("");

    return (
        <div>
            <h3>Hello {name}</h3>

            <input
                type="text"
                value={name}
                onChange={(eve) => {
                    const newValue = eve.target.value;
                    setName(newValue);
                }}
            />
        </div>
    );
};

export default HelloUser;
