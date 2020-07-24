import React from 'react';
import './App.css';
import {Login} from "./components/Login/Login";
import {NewPassword} from "./components/NewPassword/NewPassword";
import {PasswordRecovery} from "./components/PasswordRecovery/PasswordRecovery";
import {Profile} from "./components/Profile/Profile";
import {Registration} from "./components/Registration/Registration";

function App() {
    return (
        <div className="App">
            <Login/>
            <NewPassword/>
            <PasswordRecovery/>
            <Profile/>
            <Registration/>
        </div>
    );
}

export default App;
