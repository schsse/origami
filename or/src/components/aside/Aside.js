import React from 'react'
import Link from '../link/Link'
import styles from './index.module.css'

const Aside=()=>{
    const renderLinks=()=>{
        const bla=[1,2,3,4,5,6,7,8,9,10]
        return bla.map((n,i)=>{
          return (<Link href="#" title={`Going to ${n}`} key={i} type="aside" />)
        })
      }

    return(
      <aside className={styles.aside}>
        <ul>
           {renderLinks()}
        </ul>
      </aside>
    )
}
export default Aside