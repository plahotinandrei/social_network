import React from 'react';
import {Link} from 'react-router-dom';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.message}>
            <Link to={`/profile/${props.id}`} className={styles.avatar}>
                <img src={props.src}/>
            </Link>
            <span className={styles.text}>{props.message}</span>
        </div>
    )
}

export default Message;