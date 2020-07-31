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
        case 'react-friday-ts/registrationReducer/SET-EMAIL-SECCESS':
            return {
                ...state,
                email: action.newEmail
            }
        case 'react-friday-ts/registrationReducer/SET-PASSWORD-SECCESS':
            return {
                ...state,
                password: action.newPassword
            }
        case 'react-friday-ts/registrationReducer/SET-PASSWORD2-SECCESS':
            return {
                ...state,
                password2: action.newPassword2
            }
        case 'react-friday-ts/registrationReducer/SET-SUCCESS-SECCESS':
            return {
                ...state,
                success: action.success,
                error: ''
            }
        case 'react-friday-ts/registrationReducer/SET-LOADING-SECCESS':
            return {
                ...state,
                loading: action.loading,
                success: false,
                error: '',
            }
        case 'react-friday-ts/registrationReducer/SET-ERROR-SECCESS':
            return {
                ...state,
                success: false,
                error: action.error
            }
        default:
            return state;
    }
};

//Action creators

export const actions = {

    setEmail: (newEmail: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-EMAIL-SECCESS',
        newEmail
    } as const),
    setPassword: (newPassword: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-PASSWORD-SECCESS',
        newPassword
    } as const),
    setPassword2: (newPassword2: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-PASSWORD2-SECCESS',
        newPassword2
    } as const),
    setSuccess: (success: boolean) => ({
        type: 'react-friday-ts/registrationReducer/SET-SUCCESS-SECCESS',
        success
    } as const),
    setLoading: (loading: boolean) => ({
        type: 'react-friday-ts/registrationReducer/SET-LOADING-SECCESS',
        loading
    } as const),
    setError: (error: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-ERROR-SECCESS',
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
    dispatch(actions.setLoading(true))
    if (password !== password2) {
        dispatch(actions.setError('Correct your password'))
        dispatch(actions.setPassword2(''))
        dispatch(actions.setLoading(false))
    } else {
        apiMethods.register(email, password)
            .then(data => {
                if (data.success) {
                    dispatch(actions.setSuccess(true))
                    dispatch(actions.setEmail(''))
                    dispatch(actions.setPassword(''))
                    dispatch(actions.setPassword2(''))
                    dispatch(actions.setLoading(false))
                }
            })
            .catch(error => {
                console.log(error)
                dispatch(actions.setSuccess(false));
                dispatch(actions.setError(error));
                dispatch(actions.setLoading(false))
            })
    }
}