import React from "react";
import {NavLink} from "react-router-dom";

type PropsType = {
    title: string
    path: string
}

export const Navlink = (props: PropsType) => {
    return (
        <div>
            <NavLink to={props.path}>{props.title}</NavLink>
        </div>
    );
};