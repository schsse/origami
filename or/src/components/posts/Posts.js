import React from 'react'
import Post from '../post/Post'
import Bla from '../bla/Bla';
import styles from './index.module.css'

const Posts = (props) => {
    let pictures;
	if(props.data.length>0){
		pictures = props.data.map(pic => (
			<Post
				title={pic.title}
				key={pic.id}
				url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`}
			/>
		));
	} else {
			pictures = <Bla />
  }
  
  return(
      <ul className={styles.description}>
        {pictures}
      </ul>
  )
}
export default Posts;
