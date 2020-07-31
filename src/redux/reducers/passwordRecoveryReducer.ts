import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from "../store";
import {apiMethods} from "../../api/api";

const SET_SERVER_ANSWER = 'Reducers/PasswordRecovery/SET_SERVER_ANSWER';

type InitialStateType = {
    title: string
    loading: boolean
    isAuth: boolean
    serverAnswer: string
};

const initialState = {
    title: 'Password Recovery',
    loading: false,
    isAuth: false,
    serverAnswer: ''
};

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: any): any => {
    switch (action) {
        case SET_SERVER_ANSWER:
            return {...state, serverAnswer: action.answer};
        default:
            return state;
    }
};

// actions
type ActionsType = SetServerAnswerType;

type SetServerAnswerType = {
    type: typeof SET_SERVER_ANSWER,
    answer: string
};

const setServerAnswerAc = (answer: string): SetServerAnswerType => ({
    type: SET_SERVER_ANSWER,
    answer
});

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

export const resetPassword = (email: string): ThunkType => {
    return async (dispatch: ThunkDispatchType) => {
        const data = await apiMethods.forgot(email);

        data.success
            ? dispatch(setServerAnswerAc('ok'))
            : dispatch(setServerAnswerAc('some error'));
    };
};