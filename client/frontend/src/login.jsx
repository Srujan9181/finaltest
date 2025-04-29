import styles from './styles/login.module.css'
import { useState } from 'react';
import axios from "axios";
import right from "./assets/Frame.png"
import logo from "./assets/logo.png"

import React from 'react'
import { useNavigate } from 'react-router-dom';


function login() {
    let navigate=useNavigate()
    const [username,SetUsername]=useState("")
    const [password,SetPassword]=useState("")
    async function handlelogin(e){
        e.preventDefault()
        
        let response=await axios.post("http://localhost:5353/user/login",
            {
                email:username,
                password

            }
            
        )
        
        if (response.data==="login sucessfull"){
            alert("login in sucesfull")
            
        }
        else{
            alert("wrong credentials")
            
        }
    }
  return (
    <div className={styles.main}>
        
        <div className={styles.form}>
            <img src={logo} alt="" className={styles.logo}/>
            <div className={styles.logoform}>
                <h2>Sign in to your Plexify</h2>
               <form onSubmit={handlelogin} className={styles.formdata}>
               {/*<form onSubmit={()=>navigate("/dashboard")} className={styles.formdata}> */} 
                    <label htmlFor="username">Username</label> <br />
                    <input type="text" id='username' value={username} onChange={(e)=>SetUsername(e.target.value)} /> <br />
                    <label htmlFor="password">Password</label> <br />
                    <input type="password" name="password" id="password" value={password} onChange={(e)=>SetPassword(e.target.value)}/> <br />
                    <input type="submit" value="Log in" className={styles.login} />
                </form>
            </div>

        </div>
        <img src={right} alt="" className={styles.right}/>
    </div>
  )
}

export default login