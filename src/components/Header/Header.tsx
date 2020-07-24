import React from "react";
import {Navlink} from "../../utils/Navlink/Navlink";
import {loginPath, newPassPath, profilePath, registrationPath, restorePath} from "../../utils/helpers/routes.path";
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header>
            <nav className={styles.nav}>
                <Navlink title={'Логин'} path={loginPath} />
                <Navlink title={'Зарегистрироваться'} path={registrationPath} />
                <Navlink title={'Профиль'} path={profilePath} />
                <Navlink title={'Сбросить пароль'} path={restorePath} />
                <Navlink title={'Установить новый пароль'} path={newPassPath} />
            </nav>
        </header>
    );
};