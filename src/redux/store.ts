import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
import {loginReducer} from "./reducers/loginReducer";
import {registrationReducer} from "./reducers/registrationReducer";
import {newPasswordReducer} from "./reducers/newPasswordReducer";
import {passwordRecoveryReducer} from "./reducers/passwordRecoveryReducer";
import {profileReducer} from "./reducers/profileReducer";

const rootReducer = combineReducers({
    login: loginReducer,
    registration: registrationReducer,
    newPassword: newPasswordReducer,
    passwordRecovery: passwordRecoveryReducer,
    profile: profileReducer
});

export type InferActionTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never;

export type AppStateType = ReturnType<typeof rootReducer>;
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

 // @ts-ignore
window.store = store;