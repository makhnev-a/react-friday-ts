import {ActionsType, InitialStateType, OneCardsPackType, SetCardsPackType} from "./types";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AppStateType } from "../../store";
import {apiMethods} from "../../../api/api";

export const SET_CARDS_PACK = 'Reducers/Cards/SET_CARDS_PACK';

export type ThunkType = ThunkAction<void, AppStateType, unknown, any>
export type ThunkDispatchType = ThunkDispatch<AppStateType, {}, any>

const initialState = {
    cardPacks: []
};

export const cardsReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_CARDS_PACK:
            return {...state, cardPacks: action.cardPacks};
        default:
            return state;
    }
};

const setCardsPack = (cardPacks: Array<OneCardsPackType>): SetCardsPackType => ({
    type: SET_CARDS_PACK,
    cardPacks
});

export const getCardPacksThunk = (token: string) => async (dispatch: ThunkDispatchType) => {
    let result = await apiMethods.getCardsPack(token);
    dispatch(setCardsPack(result.data));
};
