import React from 'react';
import styles from "../assets/scss/Login.module.scss"
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginForm";

const Login = () => {
    return (
        <div className={styles.login}>
            <LoginHeader/>
            <LoginForm/>
        </div>
    );
};

export default Login;