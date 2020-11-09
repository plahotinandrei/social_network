import React from 'react';
import Users from './Users.js'
import {connect} from 'react-redux';
import {getUsersThunkCreator, followThunkCreator, unfollowThunkCreator} from './../../redux/users-reduser.js';
import withAuthRedirect from '../../hoc/withAuthRedirect.js';

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.pageCount, this.props.usersCount);
    }

    onChangedPage = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.usersCount);
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
        getUsers: (pageCount, usersCount) => {
            dispatch(getUsersThunkCreator(pageCount, usersCount))
        },
        follow: (userId) => {
            dispatch(followThunkCreator(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowThunkCreator(userId))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withAuthRedirect(UsersContainer));