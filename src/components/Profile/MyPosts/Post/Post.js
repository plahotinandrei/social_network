import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return (
        <div className={styles.post}>
            <a href="">
                <img src={props.src}/>
            </a>
            <p>{props.text}</p>
        </div>
    )
}

export default Post;