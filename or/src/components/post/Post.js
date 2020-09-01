import React from 'react';
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird.png'

// Post is in Posts() in Container(gets the posts with axios and gives it s props to Posts)
const Post = props =>(
<li className={styles.item}>
    {/* <img src = {props.url} alt={props.title} /> */}
    <img src={logo} alt="blue origami bird" className={styles.logo} />
    {/* <span>{props.index + ' - '}</span> */}
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
{/* <p class="name"> ${item.name.first} ${item.name.last}</p>
<p class="email">${item.email}</p>
<p class="location">${item.location.city}</p>
</span>
<div class="personExtraData" style="display:none">
<p>${item.cell}</p>
<p class="address">${item.location.street.name} ${item.location.street.number}, ${item.location.state}, ${item.location.postcode}</p>
<p>Birthday: ${date}/${month}/${year}</p> */}