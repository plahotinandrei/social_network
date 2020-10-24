const SET_USER_DATA = 'SET-USER-DATA';

let initialState = {
    id: null,
    login: null,
    email: null
}

let authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
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

export default authReducer;
export {setUserDataCreator};

