import React from "react";
import {useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {Redirect} from "react-router-dom";

export const Profile: React.FC = () => {
    const {auth, serverData} = useSelector((state: AppStateType) => state.login);

    if (!auth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div>
            <h1>Profile page</h1>
            <div>
                <h3><b>Hello, </b> {serverData?.name}</h3>
                <div><b>Email: </b> {serverData?.email}</div>
                <div><b>Is admin: </b> {serverData?.isAdmin ? 'Yes' : 'No'}</div>
                <div><b>Public Card Packs Count: </b> {serverData?.publicCardPacksCount}</div>
            </div>
        </div>

    );
};