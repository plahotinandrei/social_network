import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.js';
import {getUserThunkCreator} from './../../redux/profile-reducer.js';

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
        profile: state.profilePage.profile
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getUser: (userId) => {
            dispatch(getUserThunkCreator(userId))
        }
    }
}

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);
