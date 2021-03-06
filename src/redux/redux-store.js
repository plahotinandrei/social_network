import {applyMiddleware, combineReducers, createStore} from 'redux';
import thankMiddleware from 'redux-thunk';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reduser';
import authReducer from './auth-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

let store = createStore(reducers, applyMiddleware(thankMiddleware));

export default store;