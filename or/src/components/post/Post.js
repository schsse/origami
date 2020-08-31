import React from 'react';
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird.png'

// Post is in Posts() in Container(gets the posts with axios and gives it s props to Posts)
const Post = props =>(
<li className={styles.item}>
    <img src = {props.url} alt={props.title} />
    <img src={logo} alt="blue origami bird" className={styles.logo} />
    <div>
        <span>
          <small>Author:</small>
          PK the genious
        </span>
    </div>
</li>
);

export default Post;