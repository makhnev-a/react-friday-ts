import React, {ChangeEvent, useState} from "react";
import {Button} from "../../utils/Button/Button";
import {Input} from "../../utils/Input/Input";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {resetPassword} from "../../redux/reducers/passwordRecoveryReducer";
import {Redirect} from "react-router-dom";

export const PasswordRecovery: React.FC = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const {error, success} = useSelector((state: AppStateType) => state.passwordRecovery);

    const changeForgotEmail = (event: ChangeEvent<HTMLInputElement>) => setEmail(event.currentTarget.value);
    const onSubmitForgot = () => dispatch(resetPassword(email));

    return (
        <>
            <h1>PasswordRecovery page</h1>
            {success && <Redirect to={'/new-pass'}/>}
            <Input
                type={'email'}
                placeholder={'Введите email для сброса'}
                changeHandler={changeForgotEmail}
                value={email}
            />
            <Button
                text={'Сбросить пароль'}
                clickHandler={onSubmitForgot}
            />
            <div>{error && error}</div>
        </>
    );
};