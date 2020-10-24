import {addPostCreator, updateNewPostTextCreator} from './../../../redux/profile-reducer.js';
import {connect} from 'react-redux';
import MyPosts from './MyPosts.js';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostCreator())
        },
        updateNewPostText: (body) => {
            dispatch(updateNewPostTextCreator(body))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;