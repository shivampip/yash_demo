import React from "react";

const LikeButton = ({ text, cc, city }) => {
    return (
        <button>
            {text} and my color is {cc} I live at {city}
        </button>
    );
};

export default LikeButton;
