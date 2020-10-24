import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.js';
import {setUserProfileCreator} from './../../redux/profile-reducer.js';
import {profileAPI} from '../../api/api.js';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;

        if(!userId) {
            userId = 11913;
        }
        
        profileAPI.getUser(userId).then((response) => {
            this.props.setUserProfile(response);
        })
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
        setUserProfile: (profile) => {
            dispatch(setUserProfileCreator(profile))
        }
    }
}

let WithUrlDataContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer);
