import React from 'react';
import styles from './Loader.module.css';

let Loader = (props) => {
    return (
        <img className={styles.loader} src="/img/loader.svg"/>
    )
}

export default Loader;