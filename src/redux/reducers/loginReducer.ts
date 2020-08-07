import {InferActionTypes, AppStateType} from '../store';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {apiMethods} from '../../api/api';

type InitialStateType = {
    title: string
    loading: boolean
    error: boolean
    auth: boolean
    serverData?: ServerDataType
};

type UserType = {
    email: string
    password: string
    rememberMe: boolean
}

type ServerDataType = {
    created?: string
    email?: string
    isAdmin?: boolean
    name?: string
    publicCardPacksCount?: number
    rememberMe?: boolean
    success?: boolean
    token?: string
    tokenDeathTime?: number
    updated?: string
    verified?: boolean
    __v?: number
    _id?: string
}

const initialState: InitialStateType = {
    title: 'Login',
    loading: false,
    error: false,
    auth: false,
    serverData: {}
};

export const loginReducer = (state: InitialStateType = initialState, action: ActionTypes): InitialStateType => {
    switch (action.type) {
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
        case 'react-friday-ts/loginReducer/SET-LOGOUT-SUCCESS':
            return {
                ...state,
                auth: false,
                serverData: {...state.serverData, token: ''}
            };
        default:
            return state;
    }
};

//Action creators

export const actionsLogin = {
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
    } as const),
    setLogoutSuccess: () => ({
        type: 'react-friday-ts/loginReducer/SET-LOGOUT-SUCCESS',
    } as const)
};

type ActionTypes = InferActionTypes<typeof actionsLogin>

// Thunk

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;

export const setLogin = (user: UserType): ThunkType => (dispatch: ThunkDispatchType) => {
    apiMethods.login(user.email, user.password, user.rememberMe)
        .then(res => {
            dispatch(actionsLogin.setServerDataSuccess(res));
            dispatch(postToken(res.token));
            dispatch(actionsLogin.setLoadingSuccess(false));
            dispatch(actionsLogin.setErrorSuccess(false));
        })
        .catch(() => {
            dispatch(actionsLogin.setLoadingSuccess(false));
            dispatch(actionsLogin.setErrorSuccess(true));
        })
};

export const postToken = (token: string): ThunkType => (dispatch: ThunkDispatchType) => {
    return apiMethods.me(token)
        .then(res => {
            dispatch(actionsLogin.setServerDataSuccess(res));
            dispatch(actionsLogin.setAuthSuccess(true));
        })
        .catch(() => {
            dispatch(actionsLogin.setAuthSuccess(false));
            dispatch(actionsLogin.setLoadingSuccess(false));
            dispatch(actionsLogin.setErrorSuccess(true));
        })
};




