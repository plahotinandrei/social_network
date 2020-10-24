import React from 'react';
import styles from './Users.module.css';
import UserItem from './UserItem/UserItem.js';
import Loader from './../common/Loader/Loader.js';

let Users = (props) => {
    let users = props.users.map((user, i) => {
        return (
            <UserItem
                key={user.id}
                userId={user.id}
                fullName={user.name}
                photoUrl={user.photos.small}
                status={user.status}
                location={'user.location'}
                followed={user.followed}
                follow={props.follow}
                unfollow={props.unfollow}
            />
        )
    })

    let pageButtons = [];
    let pages = Math.ceil(props.totalCount/props.usersCount);
    let maxPages = props.pageCount >= pages - 3 ? pages : props.pageCount + 3;

    for(let i = props.pageCount <= 4 ? 1 : props.pageCount - 3; i <= maxPages; i++) {
        pageButtons.push(
            <button 
                className={`${styles.btn} ${i == props.pageCount ? styles.active : ''}`} 
                key={i} 
                onClick={() => {props.onChangedPage(i)}}
            >
                {i}
            </button>
        );        
    }

    return (
        <React.Fragment>
            <div className={styles.pages}>
                {pageButtons}
            </div> 
            {props.isFetching ? <Loader /> : null}
            <div className={styles.users}>
                {users}
            </div> 
        </React.Fragment>
    )
}

export default Users;