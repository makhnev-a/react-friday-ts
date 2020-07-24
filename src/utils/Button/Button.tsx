import React from "react";

type PropsType = {
    text: string
    clickHandler?: () => void
};

export const Button = (props: PropsType) => {
    return (
        <div>
            <button>{props.text}</button>
        </div>
    );
};