import React from "react";
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";

export const NewPassword = () => {
    return (
        <>
            <h1>NewPassword page</h1>
            <Input type={'password'} placeholder={'Введите старый пароль'} />
            <Input type={'password'} placeholder={'Введите новый пароль'} />
            <Button text={'Отправить'} />
        </>
    );
};