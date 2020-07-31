import {AppStateType, InferActionTypes} from '../store';
import {apiMethods} from '../../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';


type InitialStateType = {
    email: string
    password: string
    password2: string
    loading: boolean
    success: boolean
    error: string
};

const initialState = {
    email: '',
    password: '',
    password2: '',
    loading: false,
    success: false,
    error: '',
};

export const registrationReducer = (state: InitialStateType = initialState, action: ActionTypes): any => {
    switch (action.type) {
        case 'react-friday-ts/registrationReducer/SET-EMAIL-SUCCESS':
            return {
                ...state,
                email: action.newEmail
            };
        case 'react-friday-ts/registrationReducer/SET-PASSWORD-SUCCESS':
            return {
                ...state,
                password: action.newPassword
            };
        case 'react-friday-ts/registrationReducer/SET-PASSWORD2-SUCCESS':
            return {
                ...state,
                password2: action.newPassword2
            };
        case 'react-friday-ts/registrationReducer/SET-SUCCESS-SUCCESS':
            return {
                ...state,
                success: action.success,
                error: ''
            };
        case 'react-friday-ts/registrationReducer/SET-LOADING-SUCCESS':
            return {
                ...state,
                loading: action.loading,
                success: false,
                error: '',
            };
        case 'react-friday-ts/registrationReducer/SET-ERROR-SUCCESS':
            return {
                ...state,
                success: false,
                error: action.error
            };
        default:
            return state;
    }
};

//Action creators

export const actions = {

    setEmail: (newEmail: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-EMAIL-SUCCESS',
        newEmail
    } as const),
    setPassword: (newPassword: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-PASSWORD-SUCCESS',
        newPassword
    } as const),
    setPassword2: (newPassword2: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-PASSWORD2-SUCCESS',
        newPassword2
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'react-friday-ts/registrationReducer/SET-SUCCESS-SUCCESS',
        success
    } as const),
    setLoading: (loading: boolean) => ({
        type: 'react-friday-ts/registrationReducer/SET-LOADING-SUCCESS',
        loading
    } as const),
    setError: (error: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-ERROR-SUCCESS',
        error
    } as const),
};

type ActionTypes = InferActionTypes<typeof actions>

//Thunk creators

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;

export const registerUser = (email: string, password: string, password2: string):
    ThunkType => (dispatch: ThunkDispatchType) => {
    /* let email = getState().registration.email;
     let password = getState().registration.password;*/
    dispatch(actions.setLoading(true));
    if (password !== password2) {
        dispatch(actions.setLoading(false));
        dispatch(actions.setError('Correct your password'));
        dispatch(actions.setPassword2(''));
    } else {
        apiMethods.register(email, password)
            .then(data => {
                debugger
                if (data.success) {
                    dispatch(actions.setSuccess(true));
                }
            })
            .catch(() => {
                dispatch(actions.setLoading(false));
                dispatch(actions.setSuccess(false));
                dispatch(actions.setError('Invalid login or password. Try again'));
            })
    }
};