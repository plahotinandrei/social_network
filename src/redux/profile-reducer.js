import {profileAPI} from '../api/api.js';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    posts: [
        {
            id: 1,
            src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg',
            text: 'Hey, why nobody love me?'
        },
        {
            id: 2,
            src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg',
            text: 'It\'s our new program! Hey!'
        }
    ],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: 
            return {
                ...state,
                posts: [
                    ...state.posts,
                    {
                        id: 3,
                        src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg',
                        text: state.newPostText
                    }
                ],
                newPostText: ''
            };
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.postText
            };
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            };
        default: 
            return state;
    }
}

const addPostCreator = () => {
    return {
        type: ADD_POST
    }
}

const updateNewPostTextCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        postText: text
    }
}

const setUserProfileCreator = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}

const getUserThunkCreator = (userId) => {
    return (dispatch) => {
        profileAPI.getUser(userId).then((response) => {
            dispatch(setUserProfileCreator(response));
        })
    }
}

export default profileReducer;
export {addPostCreator, updateNewPostTextCreator, setUserProfileCreator, getUserThunkCreator};


