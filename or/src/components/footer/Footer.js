import React from 'react'
import styles from './index.module.css'
import Link from '../link/Link.js'
import getNav from '../../utils/navigation'
import logo from '../../images/blue-origami-bird-flipped.png'

const Footer = () =>{
  const links = getNav("kuku");

  return(
    <footer className={styles.footer} >
        <ul className={styles.container}>
          { links.map((navEl,index)=>{
             return (<Link href={navEl.link} title={navEl.title} key={index} type="footer" />)
          })
        }
          <img src={logo} alt="blue origami bird" className={styles.logo} />
        </ul>
        <p>Software University @ 2019</p>
    </footer>
  )
}
export default Footer