import React, {ChangeEvent, useState} from "react";
import {Button} from "../../utils/Button/Button";
import {Input} from "../../utils/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {resetPassword} from "../../redux/reducers/passwordRecoveryReducer";

export const PasswordRecovery: React.FC = () => {
    const dispatch = useDispatch();
    const recoveryStateTitle: any = useSelector<AppStateType>(state => state.passwordRecovery.title);
    const [email, setEmail] = useState(recoveryStateTitle);

    const recoveryHandler = () => dispatch(resetPassword(email));
    const changeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.currentTarget.value);

    return (
        <>
            <h1>PasswordRecovery page</h1>
            <Input
                type={'email'}
                placeholder={'Введите email для сброса'}
                changeHandler={changeEmail}
                value={email}
            />
            <Button
                text={'Сбросить пароль'}
                clickHandler={recoveryHandler}
            />
        </>
    );
};