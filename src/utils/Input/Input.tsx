import React from "react";

type PropsType = {
    type: string
    placeholder: string
    value?: string
    changeHandler?: () => void
};

export const Input = (props: PropsType) => {
    return (
        <div>
            <input
                type={props.type}
                placeholder={props.placeholder}
            />
        </div>
    );
};