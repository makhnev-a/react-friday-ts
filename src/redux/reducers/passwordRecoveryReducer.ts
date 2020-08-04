import {ThunkAction, ThunkDispatch} from 'redux-thunk';
import {AppStateType} from "../store";
import {apiMethods} from "../../api/api";
import ts from "typescript/lib/tsserverlibrary";
import emptyArray = ts.server.emptyArray;
import disableAutomock = jest.disableAutomock;

const SET_SERVER_ANSWER = 'Reducers/PasswordRecovery/SET_SERVER_ANSWER';
const SET_FORGOT_SUCCESS = 'Reducers/PasswordRecovery/SET_FORGOT_SUCCESS';
const SET_FORGOT_LOADING = 'Reducers/PasswordRecovery/SET_FORGOT_LOADING';
const SET_FORGOT_DISABLE = 'Reducers/PasswordRecovery/SET_FORGOT_DISABLE';
const SET_FORGOT_ERROR = 'Reducers/PasswordRecovery/SET_FORGOT_ERROR';

type InitialStateType = {
    success: boolean
    loading: boolean
    error: boolean
    disable: boolean

    title: string
    isAuth: boolean
    serverAnswer: string
};

const initialState = {
    success: false,
    error: false,
    disable: false,
    loading: false,

    title: '',
    isAuth: false,
    serverAnswer: ''
};

export const passwordRecoveryReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_SERVER_ANSWER:
            return {...state, serverAnswer: action.answer};
        case SET_FORGOT_SUCCESS:
            return {...state, success: true};
        case SET_FORGOT_LOADING:
            return {...state, loading: action.loading};
        case SET_FORGOT_DISABLE:
            return {...state, disable: action.disable};
        case SET_FORGOT_ERROR:
            return {...state, error: action.error};
        default:
            return state;
    }
};

// actions
type ActionsType = SetServerAnswerType
    | SetForgotSuccessType
    | SetForgotLoadingType
    | SetForgotDisableType
    | SetForgotErrorType;

type SetServerAnswerType = {
    type: typeof SET_SERVER_ANSWER,
    answer: string
};

const setServerAnswerAc = (answer: string): SetServerAnswerType => ({
    type: SET_SERVER_ANSWER,
    answer
});

type SetForgotSuccessType = {
    type: typeof SET_FORGOT_SUCCESS
};

const forgotSuccessAc = (): SetForgotSuccessType => ({type: SET_FORGOT_SUCCESS});

type SetForgotLoadingType = {
    type: typeof SET_FORGOT_LOADING,
    loading: boolean
};

const forgotLoadingAc = (loading: boolean): SetForgotLoadingType => ({type: SET_FORGOT_LOADING, loading});

type SetForgotDisableType = {
    type: typeof SET_FORGOT_DISABLE,
    disable: boolean
};

const forgotDisableAc = (disable: boolean): SetForgotDisableType => ({type: SET_FORGOT_DISABLE, disable});

type SetForgotErrorType = {
    type: typeof SET_FORGOT_ERROR
    error: boolean
};

const forgotErrorAc = (error: boolean): SetForgotErrorType => ({type: SET_FORGOT_ERROR, error});

// thunks
type ThunkType = ThunkAction<void, AppStateType, unknown, ActionsType>;
type ThunkDispatchType = ThunkDispatch<AppStateType, unknown, ActionsType>;

// export const resetPassword = (email: string): ThunkType => {
//     return async (dispatch: ThunkDispatchType) => {
//         const data = await apiMethods.forgot(email);
//         console.log(data);
//         debugger
//
//         // data.success
//         //     ? dispatch(setServerAnswerAc('ok'))
//         //     : dispatch(setServerAnswerAc('some error'));
//     };
// };

export const resetPassword = (email: string): ThunkType => (dispatch: ThunkDispatchType) => {
    const data = apiMethods.forgot(email).then(res => {
        dispatch(forgotSuccessAc());
        dispatch(forgotDisableAc(false));
        dispatch(forgotLoadingAc(false));
    }).catch(error => {
        dispatch(forgotErrorAc(error.response.data.error));
        dispatch(forgotDisableAc(false));
        dispatch(forgotLoadingAc(false));
    });
};