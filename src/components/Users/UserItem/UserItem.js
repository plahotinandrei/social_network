import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './UserItem.module.css';
import * as axios from 'axios';

let UserItem = (props) => {
    let follow = () => {
        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {}, {
            withCredentials: true, 
            headers: {
                "API-KEY": "5221ecaf-9b97-4c2e-a882-24127c03c06f"
            }
        }).then((response) => {
            if(response.data.resultCode === 0) {
                props.follow(props.userId);
            };
        });
    }

    let unfollow = () => {
        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.userId}`, {
            withCredentials: true, 
            headers: {
                "API-KEY": "5221ecaf-9b97-4c2e-a882-24127c03c06f"
            }
        }).then((response) => {
            if(response.data.resultCode === 0) {
                props.unfollow(props.userId);
            };
        });
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
                <button className={styles.btn} onClick={unfollow}>unfollow</button> : 
                <button className={styles.btn} onClick={follow}>follow</button>
            }
        </div>
    )
}

export default UserItem;