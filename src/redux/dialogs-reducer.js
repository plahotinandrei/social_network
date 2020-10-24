const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    dialogs: [
        {id: 1, name: 'Dmytry'},
        {id: 2, name: 'Sergey'},
        {id: 3, name: 'Andrey'},
        {id: 4, name: 'Ivan'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Petr'}
    ],
    messages: [
        {
            id: 1, 
            message: 'I am a normal popover and I can have text and everything',
            src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg'
        },
        {
            id: 2, 
            message: 'I am a normal popover and I can have text and everything',
            src: ''
        },
        {
            id: 2, 
            message: 'I am a normal popover and I can have text and everything',
            src: ''
        },
        {
            id: 2, 
            message: 'I am a normal popover and I can have text and everything',
            src: ''
        },
        {
            id: 1, 
            message: 'I am a normal popover and I can have text and everything',
            src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg'
        }
    ],
    newMessage: ''
    
}

const dialogsReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_MESSAGE: 
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: 1,
                        message: state.newMessage,
                        src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg'
                    }
                ],
                newMessage: ''
            }
        case UPDATE_NEW_MESSAGE: 
            return {
                ...state,
                newMessage: action.messageText
            }
        default: 
            return state;
    }
}

const addMessageCreator = () => {
    return {
        type: ADD_MESSAGE
    }
}
const updateNewMessageCreator = (text) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        messageText: text
    }
}

export default dialogsReducer;
export {addMessageCreator, updateNewMessageCreator};