import Dialogs from './Dialogs.js';
import {addMessageCreator, updateNewMessageCreator} from './../../redux/dialogs-reducer.js';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage,
        newMessage: state.dialogsPage.newMessage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => {
            dispatch(addMessageCreator())
        },
        updateNewMessage: (body) => {
            dispatch(updateNewMessageCreator(body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;

