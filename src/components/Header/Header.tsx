import React from "react";
import {Navlink} from "../../utils/Navlink/Navlink";
import {
    loginPath,
    newPassPath,
    profilePath,
    registrationPath,
    restorePath
} from "../../utils/helpers/routes.path";
import styles from './Header.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import { actionsLogin } from "../../redux/reducers/loginReducer";

export const Header = () => {

    const {auth} = useSelector((state: AppStateType) => state.login);
    const dispatch = useDispatch();

    return (
        <header>
            {auth ? <nav className={styles.nav}>
                    <Navlink title={'Профиль'} path={profilePath}/>
                    <Navlink title={'Установить новый пароль'} path={newPassPath}/>
                    <button onClick={() => dispatch(actionsLogin.setLogoutSuccess())}>Logout</button>
                </nav>
                : <nav className={styles.nav}>
                    <Navlink title={'Логин'} path={loginPath}/>
                    <Navlink title={'Зарегистрироваться'} path={registrationPath}/>
                    <Navlink title={'Сбросить пароль'} path={restorePath}/>
                </nav>}
        </header>
    );
};