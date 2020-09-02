import React, {Component} from 'react'
import Post from '../post/Post'
import Nada from '../nada/Nada';
import PageLayout from '../page-layout/PageLayout';
import Title from '../title/Title';
import styles from './index.module.css'
import axios from 'axios';

class Posts extends Component{
	constructor(props){
		super(props);
		this.state = {
			info: [],
			loading: true
		}
	  }
	
	   componentDidMount(){
		   this.runSearch()
	   }

	   runSearch = () =>{
        axios.get('https://randomuser.me/api/?results=11&inc=picture,name,email,location,cell,dob')
        .then(response => {
            this.setState({
            info: response.data.results,
            loading: false
            });
        })
        .catch(error => {
        console.log('error parsing and fetching data', error);
        alert("Error: 404 URL path doesn't match the route");
        });
      }

    renderPosts = () => {
		if(this.state.info.length>0){
		console.log(this.state.data)
		// console.log(props.data.results)
			return this.state.info.map((post, index) => (
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
 	    } else {
		 return  <Nada />
	}
   }

  
    // return(
    //   <ul className={styles.description}>
    //     {posts}
    //   </ul>
	// )
	render(){
		// console.log(this.state);// results
	  return(
			 <ul className={styles.description}>
			    {this.renderPosts()}
			 </ul>
	  )
	}
}

export default Posts;
