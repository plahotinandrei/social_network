import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={`${styles.nav} nav`}>
            <div className={`${styles.item} ${styles.active}`}>
                <NavLink to="/profile" activeClassName={styles.active}>
                    Profile
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/dialogs" activeClassName={styles.active}>
                    Dialogs
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/users" activeClassName={styles.active} exact>
                    Users
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/" activeClassName={styles.active} exact>
                    News
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/" activeClassName={styles.active} exact>
                    Music
                </NavLink>
            </div>
            <div className={styles.item}>
                <NavLink to="/" activeClassName={styles.active} exact>
                    Settings
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;