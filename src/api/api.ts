import {instance} from "./instance.api";
import {OneCardsPackType} from "../redux/reducers/cards/types";

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
        return instance.post(`/auth/forgot`, {
            email,
            html1: "<a href='http://localhost:3000/#/new-pass/",
            html2: "'>Set new password</a>"
        })
    },
    me(token: string) {
        return instance.post(`auth/me`, {token}).then(response => response.data);
    },
    setNewPassword(resetPasswordToken: string, password: string) {
        return instance.post(`auth/set-new-password`, {resetPasswordToken, password}).then(response => response.data);
    },
    meChange(token: string, name: string, avatar: string) {
        return instance.put(`auth/me`, {token, name, avatar}).then(response => response.data);
    },
    getCardsPack(token: string) {
        return instance.get(`cards/pack?token=${token}`).then(response => response.data);
    },
    addCardsPack(cardsPack: OneCardsPackType, token: string) {
        return instance.post(`cards/pack`, {cardsPack, token}).then(response => response.data);
    },
    deleteCardsPack(token: string, id: string) {
        return instance.delete(`cards/pack?token=${token}&id=${id}`).then(response => response.data);
    },
    updateCardsPack(cardsPack: OneCardsPackType, obj: any, token: string) {
        return instance.put(`cards/pack`, {
            cardsPack: {...cardsPack, ...obj},
            token
        }).then(response => response.data);
    },
    getCards(cardsPackId: number, token: string) {
        return instance.get(`cards/card?token=${token}&id=${cardsPackId}`)
    },
    addCard(card: any, token: string) {
        return instance.post(`cards/card`, {card, token}).then(response => response.data);
    },
    deleteCard(token: string, cardId: any) {
        return instance.delete(`cards/card?token=${token}&id=${cardId}`).then(response => response.data);
    },
    updateCard(card: any, obj: any, token: string) {
        return instance.put(`cards/card`, {
            card: {...card, ...obj},
            token
        }).then(response => response.data);
    }
};