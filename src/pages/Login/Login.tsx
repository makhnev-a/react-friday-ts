import React, {useState} from 'react';
import {Input} from "../../utils/Input/Input";
import {Button} from "../../utils/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {actionsLogin, setLogin} from '../../redux/reducers/loginReducer';
import {Redirect} from 'react-router-dom';

export const Login: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [rememberMe, setRememberMe] = useState<boolean>(false);

    const {loading, error, auth} = useSelector((state: AppStateType) => state.login);
    const dispatch = useDispatch();

    const login = () => {
        dispatch(actionsLogin.setLoadingSuccess(true));
        dispatch(setLogin({
            email,
            password,
            rememberMe
        }));
    };

    if (auth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <>
            <h1>Login page</h1>
            {loading
                ? <span>Loading...</span>
                : error
                    ? <span>Invalid login or password. Try again</span>
                    : <br/>}

            <div>
                <Input type={'text'}
                       placeholder={'Enter you email'}
                       value={email}
                       changeHandler={(e) => setEmail(e.currentTarget.value)}/>
                <Input type={'password'}
                       placeholder={'Enter you password'}
                       value={password}
                       changeHandler={(e) => setPassword(e.currentTarget.value)}/>
                <label>
                    <Input type={'checkbox'}
                           checked={rememberMe}
                           description={'Remember me'}
                           changeHandler={(e) => setRememberMe(e.currentTarget.checked)}/>
                </label>
                <Button text={'login'}
                        isDisabled={loading}
                        clickHandler={login}/>
            </div>
        </>
    );
};