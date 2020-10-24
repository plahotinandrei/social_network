import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './DialogItem.module.css';

const DialogItem = (props) => {
    return ( 
        <NavLink to={`/dialogs/${props.id}`} className={styles.dialog} activeClassName={styles.activeDialog} exact>
            {props.name}
        </NavLink>
    )
}

export default DialogItem