import React from 'react'
import Navbar from "../ui/dashbord/navbar/navbar"
import Sidebar from "../ui/dashbord/sidebar/sidebar"
import styles from "../ui/dashbord/dashbord.module.css"
import Footer from "../ui/dashbord/footer/page"


const  layout =({children}) => {
  return (

    <div className={styles.container}>
    <div className={styles.menu}>
      <Sidebar/>
    </div>
    <div className={styles.content}>
      <Navbar/>
      {children}
      <Footer/>
    </div>
  </div>

  )
}

export default layout