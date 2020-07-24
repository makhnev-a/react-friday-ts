import * as React from 'react';
import './App.css';
import {Header} from "../Header/Header";
import {AppRoutes} from "../../utils/helpers/routes";

function App() {
    return (
        <div className="App">
            <Header/>
            <div className="app-wrapper-content">
                <AppRoutes/>
            </div>
        </div>
    );
}

export default App;