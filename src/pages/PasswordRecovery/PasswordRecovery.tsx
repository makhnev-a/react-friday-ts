import React from "react";
import {Button} from "../../utils/Button/Button";
import {Input} from "../../utils/Input/Input";
import {usersApi} from "../../api/users.api";

export const PasswordRecovery = () => {
    const recoveryHandler = async () => {
        let users = await usersApi.getUsers();
        let user = await usersApi.getOneUser('headlulu888@gmail.com');
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