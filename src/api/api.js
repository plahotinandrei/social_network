import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0',
    withCredentials: true,
    headers: {
        'API-KEY': '5221ecaf-9b97-4c2e-a882-24127c03c06f'
    }
});

const usersAPI = {
    getUsers(pageCount = 1, usersCount = 20) {
        return instance.get(`/users?page=${pageCount}&count=${usersCount}`).then((response) => {
            return response.data;
        })
    }
}

const profileAPI = {
    getUser(userId = 11913) {
        return instance.get(`/profile/${userId}`).then((response) => {
            return response.data
        })
    }
}

const followAPI = {
    follow(userId) {
        return instance.post(`/follow/${userId}`).then((response) => {
            return response.data;
        });
    },

    unfollow(userId) {
        return instance.delete(`/follow/${userId}`).then((response) => {
            return response.data;
        });
    }
}

const authAPI = {
    isAuth() {
        return instance.get(`/auth/me`).then((response) => {
            return response.data;
        })
    }
}

export {usersAPI, profileAPI, followAPI, authAPI};