import React from "react";
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";

export const Registration = () => {
    return (
        <>
            <h1>Registration page</h1>
            <Input type={'text'} placeholder={'Впишите свой логин'} />
            <Input type={'password'} placeholder={'Впишите свой пароль'} />
            <Button text={'Зарегистрироваться'} />
        </>
    );
};