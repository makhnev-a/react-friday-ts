import React, {ChangeEvent} from 'react';
import styles from './Input.module.css';

type PropsType = {
    type: string
    placeholder: string
    value?: string
    changeHandler?: (e:ChangeEvent<HTMLInputElement>) => void
};

export const Input = (props: PropsType) => {
    return (
        <div>
            <input
                className={styles.input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changeHandler}
            />
        </div>
    );
};