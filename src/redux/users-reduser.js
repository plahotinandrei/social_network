const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_TOTAL_COUNT = 'SET-TOTAL-COUNT';
const TOGGLE_FETCHING ='TOGGLE-FETCHING';
const TOGGLE_FOLLOWING_PROGRESS = 'TOGGLE-FOLLOWING-PROGRESS';

let initialState = {
    users: [],
    pageCount: 1,
    usersCount: 20,
    totalCount: 0,
    isFetching: false,
    followingInProgress: []
}

let usersReduser = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [
                    ...state.users.map((user) => {
                        if(action.userId === user.id) {
                            return {
                                ...user,
                                followed: true 
                            }
                        }else {
                            return user
                        }
                    })
                ]   
            };
        case UNFOLLOW:
            return {
                ...state,
                users: [
                    ...state.users.map((user) => {
                        if(action.userId === user.id) {
                            return {
                                ...user,
                                followed: false 
                            }
                        }else {
                            return user
                        }
                    })
                ]   
            };
        case SET_USERS:
            return {
                ...state,
                users: action.users
            };
        case SET_PAGE:
            return {
                ...state,
                pageCount: action.pageCount
            };
        case SET_TOTAL_COUNT:
            return {
                ...state,
                totalCount: action.totalCount
            };
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            };
        case TOGGLE_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [
                        ...state.followingInProgress,
                        action.userId
                    ]
                    : state.followingInProgress.filter((id) => {
                        return id !== action.userId
                    })
            }
        default:
            return state;
        
    }
}

let followCreator = (userId) => {
    return {
        type: FOLLOW,
        userId
    }
}

let unfollowCreator = (userId) => {
    return {
        type: UNFOLLOW,
        userId
    }
}

let setUsersCreator = (users) => {
    return {
        type: SET_USERS,
        users
    }
}

let setPageCreator = (pageCount) => {
    return {
        type: SET_PAGE,
        pageCount
    }
}

let setTotalCountCreator = (totalCount) => {
    return {
        type: SET_TOTAL_COUNT,
        totalCount
    }
}

let toggleFetchingCreator = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching
    }
}

let toggleFollowingProgressCreator = (isFetching, userId) => {
    return {
        type: TOGGLE_FOLLOWING_PROGRESS,
        isFetching,
        userId
    }
}

export default usersReduser;
export {followCreator, unfollowCreator, setUsersCreator, setPageCreator, setTotalCountCreator, toggleFetchingCreator, toggleFollowingProgressCreator};