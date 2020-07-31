import React, {ChangeEvent} from 'react';
import styles from './Input.module.css';

type PropsType = {
    type: string
    placeholder?: string
    value?: string
    changeHandler?: (e:ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
    description?: string
};

export const Input = (props: PropsType) => {
    return (
        <div>
            <input
                className={props.description ? styles.inputCheckbox : styles.input}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                onChange={props.changeHandler}
                checked={props.checked}
            />{props.description}
        </div>
    );
};