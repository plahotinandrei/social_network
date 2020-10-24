import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                {
                    id: 1,
                    src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg',
                    text: 'Hey, why nobody love me?'
                },
                {
                    id: 2,
                    src: 'https://giftsforyouryorkie.com/wp-content/uploads/2017/10/130-220x220.jpg',
                    text: 'It\'s our new program! Hey!'
                }
            ],
            newPostText: ''
        },
        dialogsPage: {
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
            
        },
        sidebar: {
    
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('no subscribers (observers)');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        profileReducer(this._state.profilePage, action);
        dialogsReducer(this._state.dialogsPage, action);
        sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }
    
}

export default store;