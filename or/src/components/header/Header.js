import React from 'react'
import styles from './index.module.css'
import Link from '../link/Link.js'
import logo from '../../images/white-origami-bird.png'

const Header = () =>{

  const renderLinks=()=>{
    const bla=[1,2,3,4,5,6,7,8,9,10]
    return bla.map((n,i)=>{
      return (<Link href="#" title={`Going to ${n}`} key={i} type="header" />)
    })
  }

  return(
    <header className={styles.navigation} >
        <img src={logo} alt="blue origami bird" className={styles.logo} />
        <ul className={styles.container}>
          {renderLinks()}
        </ul>
    </header>
  )
}
export default Header