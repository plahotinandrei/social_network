import {authAPI} from '../api/api.js';

const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    isAuth: false,
    id: null,
    login: null,
    email: null
}

let authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

let setUserDataCreator = (data) => {
    return {
        type: SET_USER_DATA,
        data
    }
}

let authUserThunkCreator = () => {
    return (dispatch) => {
        authAPI.isAuth().then((response) => {
            if(response.resultCode === 0){
                dispatch(setUserDataCreator(response.data));
            };
            console.log(response)
        })
    }
}

export default authReducer;
export {setUserDataCreator, authUserThunkCreator};

