import React from 'react'
import { GoHome } from "react-icons/go";
import { MdOutlineMessage } from "react-icons/md";
import { IoIosStats } from "react-icons/io";
import { RiRobot3Line } from "react-icons/ri";
import { MdGroups } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import styles from './styles/navbar.module.css'
import logo from './assets/logo.png'
import { useState } from 'react';
function Navbar() {
    const[text,SetText]=useState('home')
    

  return (
    <div className={styles.main}>
        <img src={logo} alt="" className={styles.logo}/>
        <NavLink to='' ><GoHome className={styles.svg}  onClick={()=>SetText('home')}/> {text=='home' && <p className={styles.text}>Dashboard</p>} </NavLink>
        <NavLink to='contact' ><MdOutlineMessage className={styles.svg} onClick={()=>SetText("contact")} /> {text==='contact' && <p className={styles.text}>Contact Center</p>}</NavLink>
        <NavLink to='stats'><IoIosStats className={styles.svg} onClick={()=>SetText("stats")}/> {text==='stats' && <p className={styles.text}>Analytics</p>}</NavLink>
        <NavLink to='bot'><RiRobot3Line className={styles.svg} onClick={()=>SetText("bot")}/>  {text==='bot' && <p className={styles.text}>Chat bot</p>}</NavLink>
        <NavLink to='members'><MdGroups className={styles.svg} onClick={()=>SetText("members")}/> {text==='members' && <p className={styles.text}>Members</p>} </NavLink>
        <NavLink to='settings'><IoSettingsOutline className={styles.svg} onClick={()=>SetText("setting")}/> {text==='setting' && <p className={styles.text}>Setting</p>} </NavLink>
        
    </div>
  )
}

export default Navbar