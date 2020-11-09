import React from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        return (
            props.isAuth ? <Component {...props}/>
            : <Redirect to='/login'/>
        )
    }

    return connect(mapStateToProps)(RedirectComponent);
}

export default withAuthRedirect;