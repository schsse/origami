import React from 'react'
import styles from './index.module.css'
import getNav from '../../utils/navigation'
import {Link} from 'react-router-dom'

const LinkComponent = ({title,type,href})=>{
  return(
   <li className={styles[`${type}-list-item`]}>
     <Link to={href} className={styles[`${type}-link`]}>{title}</Link>
   </li>
  )
}
export default LinkComponent