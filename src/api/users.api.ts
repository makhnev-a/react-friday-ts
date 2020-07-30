import axios from 'axios';

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'http://localhost:7542/1.0/'
});

export const usersApi = {
    getUsers() {
        return instance.get(`social/users`).then(response => response.data);
    },
    getOneUser(userName: string) {
        return instance.get(`social/users?userName=${userName}`).then(response => response.data);
    }
};