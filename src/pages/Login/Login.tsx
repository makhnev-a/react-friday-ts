import React from 'react';
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {actions, setLogin} from '../../redux/reducers/loginReducer';

export const Login: React.FC = () => {

    const {email, password} = useSelector((state: AppStateType) => state.login);
    const dispatch = useDispatch();

    const login = () => {
        setLogin({
            "email": email,
            "password": password,
            "rememberMe": "false"
        });
    };

    return (
        <>
            <h1>Login page</h1>
            <form>
                <Input type={'text'}
                       placeholder={'Enter you email'}
                       value={email}
                       changeHandler={(e) => dispatch(actions.setEmailSuccess(e.currentTarget.value))}/>
                <Input type={'password'}
                       placeholder={'Enter you password'}
                       value={password}
                       changeHandler={(e) => dispatch(actions.setPasswordSuccess(e.currentTarget.value))}/>
                <Button text={'login'}
                        clickHandler={login}/>
            </form>
        </>
    );
};