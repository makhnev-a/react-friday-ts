import {instance} from "./instance.api";

export const apiMethods = {
    getUsers() {
        return instance.get(`social/users`).then(response => response.data);
    },
    getOneUser(userName: string) {
        return instance.get(`social/users?userName=${userName}`).then(response => response.data);
    },
    login(email: string, password: string, rememberMe: boolean) {
        return instance.post(`auth/login`, {email, password, rememberMe}).then(response => response.data);
    },
    register(email: string, password: string) {
        return instance.post(`auth/register`, {email, password}).then(response => response.data);
    },
    forgot(email: string) {
        debugger
        return instance.post(`auth/forgot`, {
            email,
            html1: "<a href='http://localhost:3000/#/reset-password/",
            html2: "'>reset-password-link</a>"
        }).then(response => response.data);
    },
    me(token: string) {
        return instance.post(`auth/me`, {token}).then(response => response.data);
    },
    setNewPassword(resetPasswordToken: string, password: string) {
        return instance.post(`auth/set-new-password`, {resetPasswordToken, password}).then(response => response.data);
    },
    meChange(token: string, name: string, avatar: string) {
        return instance.put(`auth/me`, {token, name, avatar}).then(response => response.data);
    }
};