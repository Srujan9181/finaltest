import React from 'react'
import styles from './styles/dashboardhome.module.css'
import { BiEnvelope } from "react-icons/bi";
import userimage from './assets/img.png'
import {useNavigate} from 'react-router-dom'
function Dashboardhome() {
    let navigate=useNavigate()
  return (
    <div className={styles.main}>
        <p style={{color:"#6A6B70"}}>Dashboard</p>
        <input type="search" name="" id="" placeholder='Search for ticket' className={styles.search} />
        <div className={styles.tickets}>
            <div className={styles.tkts}>
                    <button className={styles.allticktes}> <BiEnvelope /> All Tickets</button>
                    <button>Resolved</button>
                    <button>Unresolved</button>
            </div>
            <hr />
        </div>

        <div className={styles.ticketdesign}>
            <div className={styles.info}>
                <div >
                    <div className={styles.message}>
                    <div style={{height:"15px",width:"15px",borderRadius:"50%",backgroundColor:"#F8A534"}}></div>
                    <div>Ticket# 2023-00123</div> 
                    </div> <br /> 
                    <div style={{width:"100%",paddingLeft:"16%"}}>Hey!</div>
                </div>
                <div>
                    <div className={styles.samecolor}>Posted on 12.45 AM</div> <br />
                    <div>10:00</div>
                </div>
                
            </div>
           
            
            <div className={styles.user}>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"}}>
                    <img src={userimage} alt="" />
                    <div className={styles.samecolor}>
                    <p>username</p>
                    <p>mobile</p>
                    <p>email id</p>
                    </div>
                    
                </div>
                <div onClick={()=>navigate("contact")} style={{textDecoration:"underline",color:"#184E7F"}}>open ticket</div>
            </div>
        </div>

        


        


        

    </div>
  )
}

export default Dashboardhome