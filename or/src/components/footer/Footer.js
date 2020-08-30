import React from 'react'
import styles from './index.module.css'
import Link from '../link/Link.js'
import logo from '../../images/blue-origami-bird-flipped.png'

const Footer = () =>{

  const renderLinks=()=>{
    const bla=[1,2,3,4,5,6,7,8,9,10]
    return bla.map((n,i)=>{
      return (<Link href="#" title={`Going to ${n}`} key={i} type="footer" />)
    })
  }

  return(
    <footer className={styles.footer} >
        <ul className={styles.container}>
          {renderLinks()}
          <img src={logo} alt="blue origami bird" className={styles.logo} />
        </ul>
        <p>Software University @ 2019</p>
    </footer>
  )
}
export default Footer