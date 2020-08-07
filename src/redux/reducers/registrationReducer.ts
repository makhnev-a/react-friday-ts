import {AppStateType, InferActionTypes} from '../store';
import {apiMethods} from '../../api/api';
import {ThunkAction, ThunkDispatch} from 'redux-thunk';


type InitialStateType = {
    loading: boolean
    success: boolean
    error: string
};

const initialState = {
    loading: false,
    success: false,
    error: '',
};

export const registrationReducer = (state: InitialStateType = initialState, action: ActionTypes): any => {
    switch (action.type) {
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

export const actionsRegistration = {
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

type ActionTypes = InferActionTypes<typeof actionsRegistration>

//Thunk creators

type ThunkType = ThunkAction<void, AppStateType, unknown, ActionTypes>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionTypes>;

export const registerUser = (email: string, password: string, password2: string):
    ThunkType => (dispatch: ThunkDispatchType) => {
    dispatch(actionsRegistration.setLoading(true));
    if (password !== password2) {
        dispatch(actionsRegistration.setLoading(false));
        dispatch(actionsRegistration.setError('Correct your password'));
    } else {
        apiMethods.register(email, password)
            .then(data => {
                if (data.success) {
                    dispatch(actionsRegistration.setSuccess(true));
                }
            })
            .catch(() => {
                dispatch(actionsRegistration.setLoading(false));
                dispatch(actionsRegistration.setSuccess(false));
                dispatch(actionsRegistration.setError('Invalid login or password. Try again'));
            })
    }
};