import React, { Component } from 'react'
import Posts from '../posts/Posts'
import styles from './index.module.css'
import logo from '../../images/blue-origami-bird.png'

import axios from 'axios';
import config from '../config.js';

class Container extends Component{
  constructor(props){
    super(props);
    this.state = {
        pictures: [],
        loading: true
    }
}

   componentDidMount(){
       this.runSearch("origami")
   }

  //  componentDidUpdate(prevProps){
  //      if(prevProps.searchText !== this.props.searchText){
  //         this.runSearch("origami")
  //      }
  //  }

    runSearch = (query) => {
        axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${config}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
        .then(response => {
            this.setState({
            pictures: response.data.photos.photo,
            loading: false
            });
        })
        .catch(error => {
        console.log('error parsing and fetching data', error);
        alert("Error: 404 URL path doesn't match the route");
        });
    }

    render(){
      console.log(this.state.pictures);
      return(
        <div className={styles.post}>
          <Posts data={this.state.pictures}  />
        </div>
      )
    }
}
export default Container










