import React from 'react'
import styles from './index.module.css'
import Link from '../link/Link.js'
import getNav from '../../utils/navigation'
import logo from '../../images/white-origami-bird.png'

const Header = () =>{
  const links = getNav("kuku")

  return(
    <header className={styles.navigation} >
        <img src={logo} alt="blue origami bird" className={styles.logo} />
        <ul className={styles.container}>
        {links.map((navEl,index)=>{
          return (<Link href={navEl.link} title={navEl.title} key={navEl.title} type="header" />)
        })}
        </ul>
    </header>
  )
}
export default Header