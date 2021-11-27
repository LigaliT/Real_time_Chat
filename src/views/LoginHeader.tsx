import React from 'react';
import styles from "../assets/scss/Login.module.scss"

const LoginHeader = () => {
    return (
        <div className={styles.header}>
            <h2>
                React.js Chat
            </h2>
            <h3>
                Powered by Chatkit SDK
            </h3>
            <p>
                For more information visit website
            </p>
        </div>
    );
};

export default LoginHeader;