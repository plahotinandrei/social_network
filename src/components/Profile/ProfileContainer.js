import React from 'react';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import Profile from './Profile.js';
import {setUserProfileCreator} from './../../redux/profile-reducer.js';

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.id;

        if(!userId) {
            userId = 11913;
        }
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((response) => {
                this.props.setUserProfile(response.data);
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
