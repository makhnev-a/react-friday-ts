import React from "react";
import styles from './Button.module.css'

type PropsType = {
    text: string
    clickHandler?: () => void
};

export const Button = (props: PropsType) => {
    return (
        <div>
            <button className={styles.btn}>{props.text}</button>
        </div>
    );
};