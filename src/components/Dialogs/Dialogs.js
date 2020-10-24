import React from 'react';
import styles from './Dialogs.module.css';
import Message from './Message/Message.js';
import DialogItem from './DialogItem/DialogItem.js';

const Dialogs = (props) => {
    //debugger;
    let updateNewMessage = (e) => {
        props.updateNewMessage(e.target.value);
    }

    let addMessage = () => {
        props.addMessage();
    }

    let dialogs = props.dialogsPage.dialogs.map((dialog, i) => {
        return (
            <DialogItem
                id={dialog.id}
                name={dialog.name}
                key={`${dialog.id}_${i}`}
            />
        )
    })
    let messages = props.dialogsPage.messages.map((message, i) => {
        return (
            <Message
                src={message.src}
                id={message.id}
                message={message.message}
                key={`${message.id}_${i}`}
            />
        )
    })

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                {dialogs}
            </div>
            <div className={styles.messages}>
                {messages}
                <div className={styles.formMessage}>
                    <textarea value={props.newMessage} onChange={updateNewMessage}/>
                    <input type='button' value='send' onClick={addMessage}/>
                </div> 
            </div>  
        </div>
    )
}

export default Dialogs;

