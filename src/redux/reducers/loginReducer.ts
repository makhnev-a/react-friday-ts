import {InferActionTypes, AppStateType} from '../store';
import axios from 'axios';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';

type InitialStateType = {
    title: string,
    email: string,
    password: string
};

const initialState = {
    title: 'Login',
    email: '',
    password: ''
};

export const loginReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case 'react-friday-ts/loginReducer/SET-EMAIL-SUCCESS':
            return {
                ...state,
                email: action.newTitle
            };
        case 'react-friday-ts/loginReducer/SET-PASSWORD-SUCCESS':
            return {
                ...state,
                password: action.newTitle
            };
        default:
            return state;
    }
};

//Action creators

export const actions = {
    setEmailSuccess: (newTitle: string) => ({
        type: 'react-friday-ts/loginReducer/SET-EMAIL-SUCCESS',
        newTitle
    } as const),
    setPasswordSuccess: (newTitle: string) => ({
        type: 'react-friday-ts/loginReducer/SET-PASSWORD-SUCCESS',
        newTitle
    } as const)
};

type ActionTypes = InferActionTypes<typeof actions>

// Thunk

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;

type UserType = {
    email: string,
    password: string,
    rememberMe: string
}

export const setLogin = (user: UserType): any => {
    debugger
    axios.post('http://localhost:7542/1.0/auth/login', user)
        .then(res => {
            debugger
            return(dispatch: ThunkDispatchType) => {
                debugger
                dispatch(actions.setEmailSuccess(''));
                dispatch(actions.setPasswordSuccess(''));
            };

        })
        .catch(er => {
            debugger
        })

};




