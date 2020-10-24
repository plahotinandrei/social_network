import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Header from './Header.js'
import {setUserDataCreator} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true,
        }).then((response) => {
            if(response.data.resultCode === 0){
                this.props.setUserData(response.data.data);
            };
            console.log(response.data)
        })
    }

    render() {
        return (
            <Header login = {this.props.login}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.auth.login
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setUserData: (data) => {
            dispatch(setUserDataCreator(data));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);