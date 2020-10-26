import React from 'react';
import Users from './Users.js'
import {connect} from 'react-redux';
import {followCreator, unfollowCreator, setUsersCreator, setPageCreator, setTotalCountCreator, toggleFetchingCreator, toggleFollowingProgressCreator} from './../../redux/users-reduser.js';
import {usersAPI} from '../../api/api.js';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        usersAPI.getUsers(this.props.pageCount, this.props.usersCount).then((response) => {
            this.props.setUsers(response.items);
            this.props.setTotalCount(response.totalCount);
            this.props.toggleFetching(false);
        });
    }

    onChangedPage = (pageNumber) => {
        this.props.setPages(pageNumber);
        this.props.toggleFetching(true);
        usersAPI.getUsers(pageNumber, this.props.usersCount).then((response) => {
            this.props.setUsers(response.items);
            this.props.toggleFetching(false);
        });
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
                followingInProgress={this.props.followingInProgress}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
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
        toggleFollowingProgress: (isFetching, userId) => {
            dispatch(toggleFollowingProgressCreator(isFetching, userId))
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