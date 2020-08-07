import React from 'react';
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {actions, setLogin} from '../../redux/reducers/loginReducer';
import {Redirect} from 'react-router-dom';

export const Login: React.FC = () => {

    const {email, password, loading, error, auth, rememberMe} = useSelector((state: AppStateType) => state.login);
    const dispatch = useDispatch();

    const login = () => {
        dispatch(actions.setLoadingSuccess(true));
        dispatch(setLogin({
            email,
            password,
            rememberMe
        }));
    };

    if (auth) {
        return <Redirect to={'/cards'}/>
    }

    return (
        <>
            <h1>Login page</h1>
            {loading
                ? <span>Loading...</span>
                : error
                    ? <span>Invalid login or password. Try again</span>
                    : ''}

            <form>
                <Input type={'text'}
                       placeholder={'Enter you email'}
                       value={email}
                       changeHandler={(e) => dispatch(actions.setEmailSuccess(e.currentTarget.value))}/>
                <Input type={'password'}
                       placeholder={'Enter you password'}
                       value={password}
                       changeHandler={(e) => dispatch(actions.setPasswordSuccess(e.currentTarget.value))}/>
                <label>
                    <Input type={'checkbox'}
                           checked={rememberMe}
                           description={'Remember me'}
                           changeHandler={(e) => dispatch(actions.setRememberMeSuccess(e.currentTarget.checked))}/>
                </label>
                <Button text={'login'}
                        isDisabled={loading}
                        clickHandler={login}/>
            </form>
        </>
    );
};