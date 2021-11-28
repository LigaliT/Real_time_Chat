import React from 'react';
import styles from "../assets/scss/Login.module.scss"

const LoginForm  : React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.formwrapper}>
                <h2>Chat Login</h2>
                <hr/>
                <input/>
                <button>Login</button>
            </div>
        </div>
    );
};

export default LoginForm;