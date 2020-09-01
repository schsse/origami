import React from 'react'
import styles from './index.module.css'
import Container from '../container/Container'

const Main = ()=>{
    return(
      <main className={styles.main}>
        <h1 className={styles.header}>Cool React App Site</h1>
        <Container />
      </main>
    )
}
export default Main