import React from 'react';
import * as axios from 'axios';
import Users from './Users.js'
import {connect} from 'react-redux';
import {followCreator, unfollowCreator, setUsersCreator, setPageCreator, setTotalCountCreator, toggleFetchingCreator} from './../../redux/users-reduser.js';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.pageCount}&count=${this.props.usersCount}`, {
            withCredentials: true, 
        })
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
                this.props.toggleFetching(false);
            })
    }

    onChangedPage = (pageNumber) => {
        this.props.setPages(pageNumber);
        this.props.toggleFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.usersCount}`, {
            withCredentials: true, 
        })
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.toggleFetching(false);
            })

    }

    render() {
        return (
            <Users
                users={this.props.users}
                onChangedPage={this.onChangedPage}
                pageCount={this.props.pageCount}
                totalCount={this.props.totalCount}
                usersCount={this.props.usersCount}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFetching={this.props.isFetching}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageCount: state.usersPage.pageCount,
        totalCount: state.usersPage.totalCount,
        usersCount: state.usersPage.usersCount,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowCreator(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersCreator(users))
        },
        setPages: (users, pageCount) => {
            dispatch(setPageCreator(users, pageCount))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountCreator(totalCount))
        },
        toggleFetching: (isFetching) => {
            dispatch(toggleFetchingCreator(isFetching));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);