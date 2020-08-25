import React from 'react';
import styles from './index.module.css';   
import Link from '../link/Link.js';

const Header = () =>{

  return(
    <header className={styles.navigation} >
        <ul>
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            <Link href="#" title="Going to 1" />
            </ul>
    </header>
  )
}
export default Header