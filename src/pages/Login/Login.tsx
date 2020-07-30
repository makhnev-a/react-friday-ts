import React from 'react';
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";

export const Login: React.FC = () => {
    return (
        <>
            <h1>Login page</h1>
            <form>
                <Input type={'text'} placeholder={'Enter you email'}/>
                <Input type={'password'} placeholder={'Enter you password'}/>
                <Button text={'login'}/>
            </form>
        </>
    );
};