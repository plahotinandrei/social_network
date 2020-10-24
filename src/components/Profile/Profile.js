import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo.js';
import MyPostsContainer from './MyPosts/MyPostsContainer.js';
//import styles from './Profile.module.css';

const Profile = (props) => {
    return (
        <React.Fragment>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </React.Fragment>
    )
}

export default Profile;