import React from 'react'
import Navbar from './Navbar'
import styles from './styles/dashboard.module.css'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className={styles.main}>
        <div className={styles.navbar}>
            <Navbar />
        </div>
        <div className={styles.outlet}>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard