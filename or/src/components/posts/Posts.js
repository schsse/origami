import React from 'react'
import Post from '../post/Post'
import Nada from '../nada/Nada';
import styles from './index.module.css'

const Posts = (props) => {
	 let posts;

	console.log(props.data)
    if(props.data.length>0){
		// console.log(props.data.results)
	 posts = props.data.map((post, index) => (
			<Post
        index={index}
				email={post.email}
				key={post.cell}
				title={post.name.title}
				fName={post.name.first}
				lName={post.name.last}
				street={post.location.street.name}
				city={post.location.city}
				country={post.location.country}
				postcode={post.location.postcode}
			/>
		));
 	} 
	else {
			posts = <Nada />
  }

  
    return(
      <ul className={styles.description}>
        {posts}
      </ul>
    )
}
export default Posts;
