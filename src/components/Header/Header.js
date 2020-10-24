import React from 'react';
import {NavLink} from 'react-router-dom'
let path = require('path');
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={`${styles.header} header`}>
            <img className={styles.logo} src={ path.resolve(__dirname, 'src/angellist-peace-logo.png')}/>
            <span className={styles.login}>
                {!props.login ? <NavLink to='/login'>Login</NavLink> : props.login}
            </span>
        </header>
    )
}

export default Header;