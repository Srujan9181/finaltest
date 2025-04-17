import React from "react";
import styles from './styles/home.module.css'
import logo from './assets/logo.png'
import usercard from './assets/usercard.png'
import Calendar from './assets/Calendar.png'
import dr from './assets/dr.png'
import stats from './assets/stats.png'
import {useNavigate} from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";
import { IoPlayCircleOutline } from "react-icons/io5";
import adobe from "./assets/adobe.png"
import elastic from "./assets/elastic.png"
import opendoor from "./assets/opendoor.png"
import airtable from "./assets/airtable.png"
import farmer from "./assets/farmer.png"
export default function home(){
    let navigate=useNavigate()
    return(
        <div>
            <div className={styles.header} >
                <div><img src={logo} alt="" /></div>
                <div className={styles.loginandsignin}>
                    <button className={styles.button} onClick={()=>navigate("login")}>Login</button>
                    <button className={styles.button} id={styles.signin} onClick={()=>navigate("signin")}>Sign up</button>
                </div>
            </div>


            <div className={styles.body} >
                <div className={styles.sideheading}>
                    <h1>Grow Your Business Faster with Hubly CRM</h1>
                    <p style={{color:"#30404D"}}>Manage leads, automate workflows, and close deals effortlessly-all in one powerful platform.</p>
                    <div className={styles.startedbuttonandvideo}> 
                          <button style={{backgroundColor:"#244779",color:"white"}}>Get Started <GoArrowRight style={{fontSize:"14",paddingLeft:"5px",paddingRight:"10px",backgroundColor:"#244779"}}/></button>
                          <button><IoPlayCircleOutline style={{fontSize:"30",paddingRight:"10px"}} />    Watch Video</button>
                    </div>
                </div>
                <div className={styles.multiimages}>
                    <img src={usercard} alt="" className={styles.usercard}/>
                    <img src={dr} alt="" className={styles.dr}/>
                    <img src={stats} alt="" className={styles.stats} />
                    <img src={Calendar} alt="" className={styles.Calendar} />
                </div>
            </div>
            <div className={styles.footer}>
                <img src={adobe} alt="" />
                <img src={elastic} alt="" />
                <img src={opendoor} alt="" />
                <img src={airtable} alt="" />
                <img src={elastic} alt="" />
                <img src={farmer} alt="" />
                
            </div>
            <div className={styles.secondpage}>
                <div>
                    <h2>At its core, Hubly is a robust CRM solution.</h2>
                </div>
                <div>img</div>
            </div>
        </div>
    )
}