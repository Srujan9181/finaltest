import styles from './login.module.css'

import axios from "axios";
import right from "./assets/Frame.png"
import logo from "./assets/logo.png"

import React from 'react'

function login() {
    function handlelogin(e){
        e.preventDefault()
        alert("shiney alias laxmitha")
    }
  return (
    <div className={styles.main}>
        
        <div className={styles.form}>
            <img src={logo} alt="" className={styles.logo}/>
            <div className={styles.logoform}>
                <h2>Sign in to your Plexify</h2>
                <form onSubmit={handlelogin} className={styles.formdata}>
                    <label htmlFor="username">Username</label> <br />
                    <input type="text" id='username' /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" id="password" /> <br />
                    <input type="submit" value="Log in" className={styles.login} />
                </form>
            </div>

        </div>
        <img src={right} alt="" className={styles.right}/>
    </div>
  )
}

export default login