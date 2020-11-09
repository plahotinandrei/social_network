import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import Profile from './Profile.js';
import {getUserThunkCreator} from './../../redux/profile-reducer.js';
import withAuthRedirect from '../../hoc/withAuthRedirect.js';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;

        if(!userId) {
            userId = 11913;
        }
        
        this.props.getUser(userId);
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        ) 
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userId) => {
            dispatch(getUserThunkCreator(userId))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer);
