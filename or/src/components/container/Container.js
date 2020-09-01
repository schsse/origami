import React, { Component } from 'react'
import Posts from '../posts/Posts'
import styles from './index.module.css'

import axios from 'axios';
// import config from '../config.js';

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
        info: [],
        loading: true
    }
}

   componentDidMount(){
       this.runSearch("caity lotz")
   }

  //  componentDidUpdate(prevProps){
  //      if(prevProps.searchText !== this.props.searchText){
  //         this.runSearch("origami")
  //      }
  //  }

    // runSearch = (query) => {
    runSearch = () =>{
        // axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        axios.get('https://randomuser.me/api/?results=12&inc=picture,name,email,location,cell,dob')
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

    render(){
      //  console.log(this.state);// results
      return(
        <div className={styles.container}>
          <Posts data={this.state.info}  />
        </div>
      )
    }
}
export default Container










