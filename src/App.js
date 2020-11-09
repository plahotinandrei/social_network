import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer.js';
import Navbar from './components/Navbar/Navbar.js';
import ProfileContainer from './components/Profile/ProfileContainer.js';
import DialogsContainer from './components/Dialogs/DialogsContainer.js';
import UsersContainer from './components/Users/UsersContainer.js';
import Login from './components/Login/Login.js';
import 'normalize.css';
import './App.css';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <HeaderContainer />
                <Navbar />
                <div className="app-wrapper-content">
                    <Route 
                        path="/profile/:id?" 
                        render={() => {
                            return (
                                <ProfileContainer/>
                            )
                        }}
                    />
                    <Route 
                        path="/dialogs" 
                        render={() => {
                            return (
                                <DialogsContainer/>
                            )
                        }}
                    />
                    <Route 
                        path="/users" 
                        render={() => {
                            return (
                                <UsersContainer/>
                            )
                        }}
                    />  
                    <Route 
                        path="/login" 
                        render={() => {
                            return (
                                <Login/>
                            )
                        }}
                        exact
                    />           
                </div>  
            </div>
        </BrowserRouter>

    )
}

export default App;