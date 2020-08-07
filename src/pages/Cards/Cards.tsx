import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "../../redux/store";
import {getCardPacksThunk} from "../../redux/reducers/cards/cardsReducer";
import {OneCardsPackType} from "../../redux/reducers/cards/types";
import {Redirect} from "react-router-dom";

export const Cards = () => {
    const dispatch = useDispatch<any>();
    const packs: any = useSelector<AppStateType>(state => state.cards.cardPacks);
    const {auth, serverData}: any = useSelector<AppStateType>(state => state.login);

    if (!auth) {
        return <Redirect to={'/login'}/>
    }

    const token: string = serverData.token;
    const getCardPacks = () => dispatch(getCardPacksThunk(token));

    // For get params search
    // const location = useLocation();
    // const searchParams = new URLSearchParams(location.search);

    return (
        <>
            <h2>Cards page</h2>

            <button onClick={getCardPacks}>Get card packs</button>

            <table>
                <thead>
                <tr>
                    <th>Cards name</th>
                    <th>Cards count</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {packs.map((pack: OneCardsPackType, index: number) => {
                    return <tr key={`cardPack${index}`}>
                        <td>{pack.name}</td>
                        <td>{pack.cardsCount}</td>
                        <td>
                            <button>Add</button>
                            <button>Update</button>
                            <button>Del</button>
                        </td>
                    </tr>
                })}
                </tbody>
            </table>
        </>
    );
};