import React from 'react';
import Loader from './../../common/Loader/Loader.js';
import styles from './ProfileInfo.module.css';

let ProfileInfo = (props) => {
    if(!props.profile) {
        return (
            <Loader/>
        )
    }
    return (
        <React.Fragment>
            <img className={styles.headImg} src="https://image-skincare.ru/wa-data/public/photos/83/06/683/683.1200.jpg"/>
            
            <div className={styles.contentWrapper}>
                <div className={styles.description}>
                    <img src={props.profile.photos.large ? props.profile.photos.large : 'https://ufland.moy.su/camera_a.gif'}/>
                    <ul>
                        <li className={styles.name}>{props.profile.fullName}</li>
                        <li><b>Status:</b> {props.profile.aboutMe}</li>
                        <li><b>Work:</b> {props.profile.lookingForAJobDescription}</li>
                    </ul>
                </div>     
            </div>
        </React.Fragment>
    )
}

export default ProfileInfo;