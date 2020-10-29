import React from 'react';
import {connect} from 'react-redux';
import Header from './Header.js'
import {authUserThunkCreator} from './../../redux/auth-reducer.js';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.authUser();
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
        authUser: () => {
            dispatch(authUserThunkCreator());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);