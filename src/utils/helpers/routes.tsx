import React from "react";
import {Route} from "react-router-dom";
import {Login} from "../../pages/Login/Login";
import {Registration} from "../../pages/Registration/Registration";
import {NewPassword} from "../../pages/NewPassword/NewPassword";
import {PasswordRecovery} from "../../pages/PasswordRecovery/PasswordRecovery";
import {Profile} from "../../pages/Profile/Profile";
import {Cards} from "../../pages/Cards/Cards";
import { Card } from "../../pages/Cards/Card/Card";

export const AppRoutes = () => {
    return (
        <>
            <Route path='/login' render={() => <Login />} />
            <Route path='/registration' render={() => <Registration />} />
            <Route path='/new-pass' render={() => <NewPassword />} />
            <Route path='/restore-pass' render={() => <PasswordRecovery />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/cards' render={() => <Cards />} />
            <Route path='/card' render={() => <Card />} />
        </>
    );
};