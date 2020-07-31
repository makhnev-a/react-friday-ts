import {InferActionTypes, AppStateType} from '../store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {apiMethods} from '../../api/api';

type InitialStateType = {
    title: string
    email: string
    password: string
    rememberMe: boolean
    loading: boolean
    error: boolean
    auth: boolean
    serverData?: ServerDataType
};

const initialState = {
    title: 'Login',
    email: '',
    password: '',
    rememberMe: false,
    loading: false,
    error: false,
    auth: false
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
        case 'react-friday-ts/loginReducer/SET-REMEMBER-ME-SUCCESS':
            return {
                ...state,
                rememberMe: action.isRemember
            };
        case 'react-friday-ts/loginReducer/SET-LOADING-SUCCESS':
            return {
                ...state,
                loading: action.isLoading
            };
        case 'react-friday-ts/loginReducer/SET-ERROR-SUCCESS':
            return {
                ...state,
                error: action.isError
            };
        case 'react-friday-ts/loginReducer/SET-AUTH-SUCCESS':
            return {
                ...state,
                auth: action.isAuth
            };
        case 'react-friday-ts/loginReducer/SET-SERVER-DATA-SUCCESS':
            return {
                ...state,
                serverData: action.data
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
    } as const),
    setRememberMeSuccess: (isRemember: boolean) => ({
        type: 'react-friday-ts/loginReducer/SET-REMEMBER-ME-SUCCESS',
        isRemember
    } as const),
    setLoadingSuccess: (isLoading: boolean) => ({
        type: 'react-friday-ts/loginReducer/SET-LOADING-SUCCESS',
        isLoading
    } as const),
    setErrorSuccess: (isError: boolean) => ({
        type: 'react-friday-ts/loginReducer/SET-ERROR-SUCCESS',
        isError
    } as const),
    setAuthSuccess: (isAuth: boolean) => ({
        type: 'react-friday-ts/loginReducer/SET-AUTH-SUCCESS',
        isAuth
    } as const),
    setServerDataSuccess: (data: ServerDataType) => ({
        type: 'react-friday-ts/loginReducer/SET-SERVER-DATA-SUCCESS',
        data
    } as const)
};

type ActionTypes = InferActionTypes<typeof actions>

// Thunk

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;

type UserType = {
    email: string
    password: string
    rememberMe: boolean
}

type ServerDataType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    publicCardPacksCount: number
    rememberMe: boolean
    success: boolean
    token: string
    tokenDeathTime: number
    updated: string
    verified: boolean
    __v: number
    _id: string
}

export const setLogin = (user: UserType): ThunkType => (dispatch: ThunkDispatchType) => {
    apiMethods.login(user.email, user.password, user.rememberMe)
        .then(res => {
            dispatch(actions.setServerDataSuccess(res));
            dispatch(postToken(res.token));
        })
        .catch(() => {
            dispatch(actions.setLoadingSuccess(false));
            dispatch(actions.setErrorSuccess(true));
        })
};

export const postToken = (token: string): ThunkType => (dispatch: ThunkDispatchType) => {
    return apiMethods.me(token)
        .then(res => {
            dispatch(actions.setServerDataSuccess(res));
            dispatch(actions.setAuthSuccess(true));
        })
        .catch(() => {
            dispatch(actions.setAuthSuccess(false));
            dispatch(actions.setLoadingSuccess(false));
            dispatch(actions.setErrorSuccess(true));
        })
};




