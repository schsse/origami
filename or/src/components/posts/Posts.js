import React, {Component} from 'react'
import styles from './index.module.css'
import Post from '../post/Post'

class Posts extends Component{

    render(){
        return(
            <div className={styles.posts}>
                 <Post />
            </div>
        )
    }
}
export default Posts