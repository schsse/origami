import React, { Component } from 'react'
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird.png'

class Post extends Component{

    render(){
      return(
        <div className={styles.post}>
          <img src={logo} alt="blue origami bird" className={styles.logo} />
          <p className={styles.description}>bal proba.....</p>
          <div>
            <span>
              <small>Author:</small>
              PK the genious
            </span>
          </div>
        </div>

      )
    }
}
export default Post