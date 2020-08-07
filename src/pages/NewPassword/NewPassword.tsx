import React from "react";
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export const NewPassword: React.FC = () => {
    debugger

    const {auth} = useSelector((state: AppStateType) => state.login);
    if (!auth) return <Redirect to={'/login'}/>;

    return (
        <>
            <h1>NewPassword page</h1>
            <Input type={'password'} placeholder={'Введите старый пароль'} />
            <Input type={'password'} placeholder={'Введите новый пароль'} />
            <Button text={'Отправить'} />
        </>
    );
};