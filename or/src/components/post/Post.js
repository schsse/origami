import React from 'react';
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird.png'

// Post is in Posts() in Container(gets the posts with axios and gives it s props to Posts)
const Post = props =>(
<li className={styles.item}>
    <img src={logo} alt="blue origami bird" className={styles.logo} />
    <p className={styles.description}>
    {props.index + ' - '}
      {props.email} {props.street} {props.city} {props.country} {props.postcode}
      {props.email} {props.street} {props.city} {props.country} {props.postcode}
      {props.email} {props.street} {props.city} {props.country} {props.postcode}
      </p>
    <div>
        <span>
          <small>Author: </small>
          {props.title + ' '} {props.fName + ' '} {props.lName}
        </span>
    </div>
</li>
);

export default Post;
