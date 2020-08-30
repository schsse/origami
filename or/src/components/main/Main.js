import React from 'react'
import styles from './index.module.css'
import Posts from '../posts/Posts'

const Main = ()=>{
    return(
      <main className={styles.main}>
        <h1 className={styles.header}>I made it again!! GitHub is annoying and i am cool!</h1>
            <Posts className={styles.posts}/>
      </main>
    )
}
export default Main