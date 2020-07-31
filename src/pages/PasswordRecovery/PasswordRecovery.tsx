import React from "react";
import {Button} from "../../utils/Button/Button";
import {Input} from "../../utils/Input/Input";
import {apiMethods} from "../../api/api";

export const PasswordRecovery = () => {
    const recoveryHandler = async () => {
        let users = await apiMethods.getUsers();
        let user = await apiMethods.getOneUser('headlulu888@gmail.com');
        console.log(users, user);
    };

    return (
        <>
            <h1>PasswordRecovery page</h1>
            <Input
                type={'email'}
                placeholder={'Введите email для сброса'}
            />
            <Button text={'Сбросить пароль'} clickHandler={recoveryHandler}/>
        </>
    );
};