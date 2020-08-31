import React from 'react'
import Link from '../link/Link'
import styles from './index.module.css'
import getNav from '../../utils/navigation'

const Aside=()=>{
        const links = getNav("kuku");
      
    return(
      <aside className={styles.aside}>
        <ul>
           {links.map((navEl,index)=>{
          return (<Link href={navEl.link} title={navEl.title} key={index} type="aside" />)
        })}
        </ul>
      </aside>
    )
}
export default Aside