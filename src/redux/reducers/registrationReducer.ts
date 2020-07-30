import {InferActionTypes} from '../store';

type InitialStateType = {
    title: string
    email: string
    password: string
};

const initialState = {
    title: 'Registration',
    email: '',
    password: ''
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
        default:
            return state;
    }
};

//Action creators

export const actions = {
    setEmailSuccess: (newEmail: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-EMAIL-SECCESS',
        newEmail
    } as const),
    setPasswordSuccess: (newPassword: string) => ({
        type: 'react-friday-ts/registrationReducer/SET-PASSWORD-SECCESS',
        newPassword
    } as const)
};

type ActionTypes = InferActionTypes<typeof actions>

//Thunk creators

