import React from 'react';
import Post from './Post/Post.js';
import styles from './MyPosts.module.css';

const MyPosts = (props) => {
    let addPost = () => {
        props.addPost();
    }

    let updateNewPostText = (e) => {
        props.updateNewPostText(e.target.value);
    }

    let posts = props.posts.map((post, i) => {
        return (
            <Post src={post.src} text={post.text} key={`${post.id}_${i}`}/>
        )
    })

    return (
        <div className={styles.contentWrapper}>
            <h2>My posts</h2>
            <div className={styles.addPost}> 
                <form>
                    <textarea value={props.newPostText} onChange={updateNewPostText}/>
                    <input type="button" value="send" onClick={addPost}/>
                </form>
            </div>
            <div className={styles.posts}>
                {posts}
            </div>
        </div>
    )
}

export default MyPosts;