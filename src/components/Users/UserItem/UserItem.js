import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './UserItem.module.css';
import {followAPI} from '../../../api/api.js';

let UserItem = (props) => {
    let follow = () => {
        console.log(props.followingInProgress);
        props.toggleFollowingProgress(true, props.userId);
        followAPI.follow(props.userId).then((response) => {
            if(response.resultCode === 0) {
                props.follow(props.userId);
                props.toggleFollowingProgress(false, props.userId);
            };
        })
    }

    let unfollow = () => {
        console.log(props.followingInProgress);
        props.toggleFollowingProgress(true, props.userId);
        followAPI.unfollow(props.userId).then((response) => {
            if(response.resultCode === 0) {
                props.unfollow(props.userId);
                props.toggleFollowingProgress(false, props.userId);
            };
        })
    }

    return (
        <div className={styles.user}>
            <div className={styles.avatar}>
                <NavLink to={`/profile/${props.userId}`}>
                    <img src={props.photoUrl ? props.photoUrl : 'https://ufland.moy.su/camera_a.gif'}/>
                </NavLink> 
            </div>
            <div className={styles.info}>
                <p className={styles.name}>{props.fullName}</p>
                <p className={styles.location}>{`${props.location.city}, ${props.location.country}`}</p>
                <p className={styles.status}>{props.status}</p>
            </div>
            {props.followed ? 
                <button className={styles.btn} onClick={unfollow} disabled={props.followingInProgress.some((id) => id == props.userId)}>unfollow</button> : 
                <button className={styles.btn} onClick={follow} disabled={props.followingInProgress.some((id) => id == props.userId)}>follow</button>
            }
        </div>
    )
}

export default UserItem;