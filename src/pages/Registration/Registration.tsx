import React, {useCallback, useState} from 'react';
import {Input} from '../../utils/Input/Input';
import {Button} from '../../utils/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {registerUser} from '../../redux/reducers/registrationReducer';
import {Redirect} from 'react-router-dom';

export const Registration: React.FC = () => {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [password2, setPassword2] = useState<string>('');

    const {loading, error, success} = useSelector((state: AppStateType) => state.registration);
    const {auth} = useSelector((state: AppStateType) => state.login);

    const dispatch = useDispatch();

    const register = useCallback(
        () => dispatch(registerUser(email, password, password2)), [email, password, password2, dispatch]);

    if (success) return <Redirect to={'/login'}/>;

    if (auth) return <Redirect to={'/profile'}/>;

    return (
        <>
            <h1>Registration page</h1>
            {loading
                ? <span>Loading...</span>
                : error
                    ? <span>{error}</span>
                    : <br/>}

            <Input type={'text'} placeholder={'Впишите свой логин'}
                   value={email}
                   changeHandler={(e) => {
                       setEmail(e.currentTarget.value)
                   }}/>
            <Input type={'password'} placeholder={'Впишите свой пароль'}
                   value={password}
                   changeHandler={(e) => {
                       setPassword(e.currentTarget.value)
                   }}/>
            <Input type={'password'} placeholder={'Повторите пароль'}
                   value={password2}
                   changeHandler={(e) => {
                       setPassword2(e.currentTarget.value)
                   }}/>
            <Button text={'Зарегистрироваться'} clickHandler={register} isDisabled={loading}/>
        </>
    );
};