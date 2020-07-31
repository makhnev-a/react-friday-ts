import React, {useCallback} from 'react';
import {Input} from '../../utils/Input/Input';
import {Button} from '../../utils/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../../redux/store';
import {actions, registerUser} from '../../redux/reducers/registrationReducer';

export const Registration: React.FC = () => {

    const {email, password, password2, loading} = useSelector(
        (state: AppStateType) => state.registration);

    const dispatch = useDispatch();

    const register = useCallback(
        () => dispatch(registerUser(email, password, password2)),
        [email, password, password2, dispatch]);

    return (
        <>
            <h1>Registration page</h1>
            <Input type={'text'} placeholder={'Впишите свой логин'}
                   value={email}
                   changeHandler={(e) => {
                       dispatch(actions.setEmail(e.currentTarget.value))
                   }}/>
            <Input type={'password'} placeholder={'Впишите свой пароль'}
                   value={password}
                   changeHandler={(e) => {
                       dispatch(actions.setPassword(e.currentTarget.value))
                   }}/>
            <Input type={'password'} placeholder={'Повторите пароль'}
                   value={password2}
                   changeHandler={(e) => {
                       dispatch(actions.setPassword2(e.currentTarget.value))
                   }}/>
            <Button text={'Зарегистрироваться'} clickHandler={register} isDisabled={loading}/>
        </>
    );
};