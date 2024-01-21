import React from 'react'
import Sidebar from "..//ui/dashbord/sidebar/sidebar"
import styles from "../ui/dashbord/dashbord.module.css"
import Footer from "../ui/dashbord/footer/page"


const  layout =({children}) => {
  return (

    <div className={styles.container}>
    <div className={styles.menu}>
      <Sidebar/>
    </div>
    <div className={styles.content}>
      {children}
      <Footer/>
    </div>
  </div>

  )
}

export default layout