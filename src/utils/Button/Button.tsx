import React from "react";
import styles from './Button.module.css'

type PropsType = {
    text: string
    clickHandler?: () => void
};

export const Button = ({text, clickHandler}: PropsType) => {
    const onClickHandler = () => clickHandler && clickHandler();

    return (
        <div>
            <button
                className={styles.btn}
                onClick={onClickHandler}
            >{text}</button>
        </div>
    );
};