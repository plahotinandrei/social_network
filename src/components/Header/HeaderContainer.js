import React from 'react';
import {connect} from 'react-redux';
import Header from './Header.js'
import {setUserDataCreator} from './../../redux/auth-reducer.js';
import {authAPI} from '../../api/api.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        authAPI.isAuth().then((response) => {
            if(response.resultCode === 0){
                this.props.setUserData(response.data);
            };
            console.log(response)
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