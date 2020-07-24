import * as React from 'react';
import './App.css';
import {Header} from "../Header/Header";
import { Route } from 'react-router-dom';
import {Login} from "../../pages/Login/Login";
import {Registration} from "../../pages/Registration/Registration";
import {NewPassword} from "../../pages/NewPassword/NewPassword";
import {PasswordRecovery} from "../../pages/PasswordRecovery/PasswordRecovery";
import {Profile} from "../../pages/Profile/Profile";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper-content">
                <Route path='/login' render={Login}/>
                <Route path='/registration' render={Registration}/>
                <Route path='/new-pass' render={NewPassword}/>
                <Route path='/restore-pass' render={PasswordRecovery}/>
                <Route path='/profile' render={Profile}/>
            </div>
        </div>
    );
}

export default App;