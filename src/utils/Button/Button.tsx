import React from "react";
import styles from './Button.module.css'

type PropsType = {
    text: string
    clickHandler?: () => void
    isDisabled?: boolean
};

export const Button = (props: PropsType) => {
    return (
        <div>
            <button className={styles.btn} onClick={props.clickHandler} disabled={props.isDisabled}>{props.text}</button>
        </div>
    );
};